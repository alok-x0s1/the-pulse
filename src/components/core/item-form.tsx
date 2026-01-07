import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Item } from "../../types";
import Card from "../ui/card";
import Button from "../ui/button";

interface ItemFormProps {
	initialData?: Item;
	onSubmit: (data: Omit<Item, "id" | "createdAt" | "updatedAt">) => void;
	onCancel: () => void;
	isLoading: boolean;
}

export default function ItemForm({
	initialData,
	onSubmit,
	onCancel,
	isLoading,
}: ItemFormProps) {
	const [formData, setFormData] = useState({
		title: initialData?.title || "",
		description: initialData?.description || "",
		status: initialData?.status || ("active" as const),
		priority: initialData?.priority || ("medium" as const),
	});

	const [errors, setErrors] = useState<{ [key: string]: string }>({});

	const validateForm = () => {
		const newErrors: { [key: string]: string } = {};

		if (!formData.title.trim()) {
			newErrors.title = "Title is required";
		}
		if (!formData.description.trim()) {
			newErrors.description = "Description is required";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (validateForm()) {
			onSubmit(formData);
			setFormData({
				title: "",
				description: "",
				status: "active",
				priority: "medium",
			});
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
		>
			<Card className="p-6">
				<h2 className="mb-6 text-xl font-semibold">
					{initialData ? "Edit Item" : "Create New Item"}
				</h2>

				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label className="block text-sm font-medium">
							Title
						</label>
						<input
							type="text"
							value={formData.title}
							onChange={(e) =>
								setFormData({
									...formData,
									title: e.target.value,
								})
							}
							className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-2 text-foreground placeholder-text-muted focus:border-primary focus:outline-none"
							placeholder="Enter item title"
							disabled={isLoading}
						/>
						{errors.title && (
							<p className="mt-1 text-sm text-error">
								{errors.title}
							</p>
						)}
					</div>

					<div>
						<label className="block text-sm font-medium">
							Description
						</label>
						<textarea
							value={formData.description}
							onChange={(e) =>
								setFormData({
									...formData,
									description: e.target.value,
								})
							}
							className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-2 text-foreground placeholder-text-muted focus:border-primary focus:outline-none"
							placeholder="Enter item description"
							rows={4}
							disabled={isLoading}
						/>
						{errors.description && (
							<p className="mt-1 text-sm text-error">
								{errors.description}
							</p>
						)}
					</div>

					<div className="grid gap-4 sm:grid-cols-2">
						<div>
							<label className="block text-sm font-medium">
								Status
							</label>
							<select
								value={formData.status}
								onChange={(e) =>
									setFormData({
										...formData,
										status: e.target.value as
											| "active"
											| "completed"
											| "archived",
									})
								}
								className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none"
								disabled={isLoading}
							>
								<option value="active">Active</option>
								<option value="completed">Completed</option>
								<option value="archived">Archived</option>
							</select>
						</div>

						<div>
							<label className="block text-sm font-medium">
								Priority
							</label>
							<select
								value={formData.priority}
								onChange={(e) =>
									setFormData({
										...formData,
										priority: e.target.value as
											| "low"
											| "medium"
											| "high",
									})
								}
								className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none"
								disabled={isLoading}
							>
								<option value="low">Low</option>
								<option value="medium">Medium</option>
								<option value="high">High</option>
							</select>
						</div>
					</div>

					<div className="flex gap-4">
						<Button
							type="submit"
							disabled={isLoading}
							isLoading={isLoading}
						>
							{initialData ? "Update Item" : "Create Item"}
						</Button>
						<Button
							type="button"
							variant="secondary"
							onClick={onCancel}
							disabled={isLoading}
						>
							Cancel
						</Button>
					</div>
				</form>
			</Card>
		</motion.div>
	);
}
