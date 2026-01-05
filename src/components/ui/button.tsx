import type React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	variant?: "primary" | "secondary" | "ghost" | "danger";
	size?: "sm" | "md" | "lg";
	disabled?: boolean;
	isLoading?: boolean;
	type?: "button" | "submit" | "reset";
	className?: string;
}

export default function Button({
	children,
	onClick,
	variant = "primary",
	size = "md",
	disabled = false,
	isLoading = false,
	type = "button",
	className = "",
}: ButtonProps) {
	const baseStyles =
		"font-medium rounded-lg transition-all inline-flex items-center justify-center gap-2";

	const variants = {
		primary: "bg-primary hover:bg-primary-dark text-white",
		secondary:
			"bg-card border border-border text-foreground hover:bg-background",
		ghost: "hover:bg-background text-foreground",
		danger: "bg-error hover:bg-red-600 text-white",
	};

	const sizes = {
		sm: "px-3 py-1.5 text-sm",
		md: "px-4 py-2 text-sm",
		lg: "px-6 py-3 text-base",
	};

	return (
		<motion.button
			type={type}
			onClick={onClick}
			disabled={disabled || isLoading}
			whileHover={!disabled ? { scale: 1.02 } : {}}
			whileTap={!disabled ? { scale: 0.98 } : {}}
			className={`${baseStyles} ${variants[variant]} ${sizes[size]} disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
		>
			{isLoading && (
				<div className="h-4 w-4 animate-spin rounded-full border-2 border-border border-t-current" />
			)}
			{children}
		</motion.button>
	);
}
