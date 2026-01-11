import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
	useItems,
	useCreateItem,
	useUpdateItem,
	useDeleteItem,
} from "../hooks/useItems";
import ItemForm from "../components/core/item-form";
import ItemList from "../components/core/item-list";
import ConfirmDialog from "../components/confirm-dialog";
import { useToast } from "../hooks/useToast";
import { Plus } from "lucide-react";
import type { Item } from "../types";
import Button from "../components/ui/button";
import Card from "../components/ui/card";
import { useSearchParams } from "react-router-dom";

export default function Items() {
	const [isFormOpen, setIsFormOpen] = useState(false);

	const [deleteConfirm, setDeleteConfirm] = useState<{
		isOpen: boolean;
		itemId: string | null;
	}>({
		isOpen: false,
		itemId: null,
	});

	const { data: items = [], isLoading } = useItems();
	const createMutation = useCreateItem();
	const updateMutation = useUpdateItem();
	const deleteMutation = useDeleteItem();
	const toast = useToast();
	const [searchParams, setSearchParams] = useSearchParams();
	const editingId = searchParams.get("edit");
	const editingItem = items.find((item) => item.id === editingId);

	const filterStatus =
		(searchParams.get("status") as
			| "all"
			| "active"
			| "completed"
			| "archived") || "all";

	const setFilterStatus = (status: typeof filterStatus) => {
		setSearchParams((prev) => {
			const params = new URLSearchParams(prev);
			if (status === "all") {
				params.delete("status");
			} else {
				params.set("status", status);
			}
			return params;
		});
	};

	useEffect(() => {
		if (editingId) {
			setTimeout(() => {
				setIsFormOpen(true);
			}, 100);
		}
	}, [editingId]);

	const sortedItems = useMemo(() => {
		return [...items].sort(
			(a, b) =>
				new Date(b.createdAt).getTime() -
				new Date(a.createdAt).getTime()
		);
	}, [items]);

	const filteredItems = useMemo(() => {
		if (filterStatus === "all") return sortedItems;
		return sortedItems.filter((item) => item.status === filterStatus);
	}, [sortedItems, filterStatus]);

	const handleSubmit = async (
		formData: Omit<Item, "id" | "createdAt" | "updatedAt">
	) => {
		try {
			if (editingId) {
				await updateMutation.mutateAsync({
					id: editingId,
					updates: formData,
				});
				toast.success("Item updated successfully!");
				setSearchParams({});
			} else {
				await createMutation.mutateAsync(formData);
				setFilterStatus("all");
				toast.success("Item created successfully!");
			}
			setIsFormOpen(false);
		} catch (error) {
			console.error("Error submitting form:", error);
			toast.error("Failed to save item. Please try again.");
		}
	};

	const handleDeleteClick = (id: string) => {
		setDeleteConfirm({ isOpen: true, itemId: id });
	};

	const handleConfirmDelete = async () => {
		if (deleteConfirm.itemId) {
			try {
				await deleteMutation.mutateAsync(deleteConfirm.itemId);
				toast.success("Item deleted successfully!");
				setDeleteConfirm({ isOpen: false, itemId: null });
			} catch (error) {
				console.error("Error deleting item:", error);
				toast.error("Failed to delete item. Please try again.");
			}
		}
	};

	const handleCancel = () => {
		setSearchParams({});
		setIsFormOpen(false);
	};

	return (
		<div className="space-y-8">
			<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
				<div className="w-full">
					<div className="flex justify-between w-full">
						<h1 className="text-4xl font-bold">Items</h1>
						<Button
							size="lg"
							onClick={() => {
								setIsFormOpen(!isFormOpen);
								if (isFormOpen) {
									setSearchParams({});
								}
							}}
							className="gap-2"
							variant={isFormOpen ? "secondary" : "primary"}
						>
							<Plus size={18} />
							{isFormOpen ? "Cancel" : "New Item"}
						</Button>
					</div>
					<p className="mt-2 text-text-muted">
						Manage your tasks, notes, and projects with full CRUD
						operations.
					</p>
				</div>
			</div>

			<AnimatePresence>
				{isFormOpen && (
					<motion.div
						key="item-form"
						layout
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="overflow-hidden"
					>
						<ItemForm
							initialData={editingItem}
							onSubmit={handleSubmit}
							onCancel={handleCancel}
							isLoading={
								createMutation.isPending ||
								updateMutation.isPending
							}
						/>
					</motion.div>
				)}
			</AnimatePresence>

			<div className="flex flex-wrap gap-2">
				{(
					[
						{ id: 1, status: "all" },
						{ id: 2, status: "active" },
						{ id: 3, status: "completed" },
						{ id: 4, status: "archived" },
					] as const
				).map(({ id, status }) => (
					<motion.button
						key={id}
						onClick={() => setFilterStatus(status)}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className={`rounded-sm px-4 py-2 text-sm font-medium capitalize transition-colors ${
							filterStatus === status
								? "bg-primary text-white"
								: "border border-border bg-card hover:border-primary/50"
						}`}
					>
						{status}
					</motion.button>
				))}
			</div>

			<motion.div layout>
				{isLoading ? (
					<Card className="flex h-40 items-center justify-center">
						<div className="h-6 w-6 animate-spin rounded-full border-2 border-border border-t-primary" />
					</Card>
				) : filteredItems.length === 0 ? (
					<Card className="p-12 text-center">
						<p className="text-text-muted">
							No items found. Create one to get started!
						</p>
					</Card>
				) : (
					<ItemList
						items={filteredItems}
						// onEdit={handleEdit}
						onDelete={handleDeleteClick}
						isDeleting={deleteMutation.isPending}
					/>
				)}
			</motion.div>

			<ConfirmDialog
				isOpen={deleteConfirm.isOpen}
				title="Delete Item"
				description="Are you sure you want to delete this item? This action cannot be undone."
				confirmText="Delete"
				cancelText="Cancel"
				isDangerous={true}
				isLoading={deleteMutation.isPending}
				onConfirm={handleConfirmDelete}
				onCancel={() =>
					setDeleteConfirm({ isOpen: false, itemId: null })
				}
			/>
		</div>
	);
}
