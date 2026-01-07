import { AnimatePresence, motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import type { Item } from "../../types";
import Card from "../ui/card";
import { useNavigate } from "react-router-dom";

interface ItemListProps {
	items: Item[];
	// onEdit: (item: Item) => void;
	onDelete: (id: string) => void;
	isDeleting: boolean;
}

const statusColors = {
	active: "bg-emerald-500/20 text-emerald-400 border-emerald-500/50",
	completed: "bg-blue-500/20 text-blue-400 border-blue-500/50",
	archived: "bg-slate-500/20 text-slate-400 border-slate-500/50",
};

const priorityColors = {
	low: "text-blue-400",
	medium: "text-amber-400",
	high: "text-error",
};

export default function ItemList({
	items,
	onDelete,
	isDeleting,
}: ItemListProps) {
	const navigate = useNavigate();

	return (
		<motion.div layout className="space-y-4">
			<AnimatePresence mode="popLayout">
				{items.map((item) => (
					<motion.div
						key={item.id}
						layout
						initial={{ opacity: 0, scale: 0.98 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.98 }}
						transition={{ duration: 0.2 }}
					>
						<Card hover className="p-6">
							<div className="flex group flex-col gap-4 md:flex-row md:items-center md:justify-between">
								<div
									className="flex-1"
									onClick={() =>
										navigate(`/items/${item.id}`)
									}
									role="button"
									tabIndex={0}
									onKeyDown={(e) => {
										if (e.key === "Enter")
											navigate(`/items/${item.id}`);
									}}
								>
									<div className="flex items-start gap-3">
										<div className="flex-1">
											<h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
												{item.title}
											</h3>
											<p className="mt-2 text-text-muted line-clamp-2">
												{item.description}
											</p>

											<div className="mt-4 flex flex-wrap gap-2">
												<span
													className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${
														statusColors[
															item.status as keyof typeof statusColors
														]
													}`}
												>
													{item.status
														.charAt(0)
														.toUpperCase() +
														item.status.slice(1)}
												</span>
												<span
													className={`inline-block px-3 py-1 text-xs font-medium uppercase ${
														priorityColors[
															item.priority as keyof typeof priorityColors
														]
													}`}
												>
													{item.priority} Priority
												</span>
											</div>
										</div>
										{/* <ChevronRight
										size={20}
										className="hidden text-text-muted md:block"
									/> */}
									</div>
								</div>

								<div className="flex gap-2 shrink-0">
									{/* <motion.button
									onClick={() => onEdit(item)}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm border border-border bg-card hover:bg-background"
									disabled={isDeleting}
								>
									<Edit2 size={18} className="text-primary" />
								</motion.button> */}
									<motion.button
										onClick={(e) => {
											e.stopPropagation();
											onDelete(item.id);
										}}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className="flex h-10 w-10 items-center cursor-pointer justify-center rounded-sm border border-border bg-card hover:bg-background disabled:opacity-50"
										disabled={isDeleting}
									>
										<Trash2
											size={18}
											className="text-error"
										/>
									</motion.button>
								</div>
							</div>
						</Card>
					</motion.div>
				))}
			</AnimatePresence>
		</motion.div>
	);
}
