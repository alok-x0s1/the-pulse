import { useCallback, useState } from "react";
import type { ToastMessage, ToastType } from "../types/toast";
import { ToastContext } from "../contexts/toast-context";
import { ToastContainer } from "./ui/toast";

let toastId = 0;
const getNextId = () => `toast-${++toastId}`;

export function ToastProvider({ children }: { children: React.ReactNode }) {
	const [toasts, setToasts] = useState<ToastMessage[]>([]);

	const removeToast = useCallback((id: string) => {
		setToasts((prev) => prev.filter((toast) => toast.id !== id));
	}, []);

	const addToast = useCallback(
		(message: string, type: ToastType = "info", duration = 5000) => {
			const id = getNextId();
			setToasts((prev) => [...prev, { id, message, type, duration }]);
			if (duration > 0) {
				setTimeout(() => removeToast(id), duration);
			}
		},
		[removeToast]
	);

	return (
		<ToastContext.Provider value={{ toasts, addToast, removeToast }}>
			{children}
			<ToastContainer toasts={toasts} onRemove={removeToast} />
		</ToastContext.Provider>
	);
}
