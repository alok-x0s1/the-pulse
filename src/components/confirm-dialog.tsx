import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle } from "lucide-react";
import Button from "./ui/button";

interface ConfirmDialogProps {
	isOpen: boolean;
	title: string;
	description: string;
	confirmText?: string;
	cancelText?: string;
	isDangerous?: boolean;
	isLoading?: boolean;
	onConfirm: () => void;
	onCancel: () => void;
}

export default function ConfirmDialog({
	isOpen,
	title,
	description,
	confirmText = "Confirm",
	cancelText = "Cancel",
	isDangerous = false,
	isLoading = false,
	onConfirm,
	onCancel,
}: ConfirmDialogProps) {
	return (
		<AnimatePresence>
			{isOpen && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm h-screen"
						onClick={onCancel}
					/>

					<motion.div
						initial={{ opacity: 0, scale: 0.95, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.95, y: 20 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-0 z-50 flex items-center justify-center p-4"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="w-full max-w-sm rounded-sm border border-border bg-card p-6 shadow-xl text-center">
							<div className="w-full flex justify-center">
								{isDangerous && (
									<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-error/20">
										<AlertCircle
											size={24}
											className="text-error text-center"
										/>
									</div>
								)}
							</div>

							<h2 className="mb-2 text-lg font-semibold text-center">
								{title}
							</h2>
							<p className="mb-6 text-sm text-text-muted text-center">
								{description}
							</p>

							<div className="flex gap-3">
								<Button
									variant="secondary"
									onClick={onCancel}
									disabled={isLoading}
									className="flex-1"
								>
									{cancelText}
								</Button>
								<Button
									variant={isDangerous ? "danger" : "primary"}
									onClick={onConfirm}
									disabled={isLoading}
									isLoading={isLoading}
									className="flex-1"
								>
									{confirmText}
								</Button>
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}
