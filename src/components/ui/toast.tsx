import { motion, AnimatePresence } from "framer-motion";
import { Check, AlertCircle, Info, X } from "lucide-react";

export type ToastType = "success" | "error" | "info" | "warning";

interface ToastMessage {
	id: string;
	message: string;
	type: ToastType;
	duration?: number;
}

const iconMap = {
	success: <Check size={20} className="text-background" />,
	error: <AlertCircle size={20} className="text-background" />,
	info: <Info size={20} className="text-background" />,
	warning: <AlertCircle size={20} className="text-background" />,
};

const bgColorMap = {
	success: "bg-emerald-500 border-emerald-500/50",
	error: "bg-error border-error/50",
	info: "bg-blue-500 border-blue-500/50",
	warning: "bg-amber-500 border-amber-500/50",
};

interface ToastContainerProps {
	toasts: ToastMessage[];
	onRemove: (id: string) => void;
}

export function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
	return (
		<div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
			<AnimatePresence>
				{toasts.map((toast) => (
					<motion.div
						key={toast.id}
						initial={{ opacity: 0, y: 20, x: 100 }}
						animate={{ opacity: 1, y: 0, x: 0 }}
						exit={{ opacity: 0, y: 20, x: 100 }}
						transition={{ duration: 0.3 }}
						className={`${
							bgColorMap[toast.type]
						} border pointer-events-auto rounded-sm p-4 flex items-center gap-3 max-w-sm`}
					>
						{iconMap[toast.type]}
						<p className="text-sm text-background font-medium flex-1">
							{toast.message}
						</p>
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => onRemove(toast.id)}
							className="shrink-0"
						>
							<X
								size={16}
								className="opacity-80 hover:opacity-100 text-background"
							/>
						</motion.button>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
}
