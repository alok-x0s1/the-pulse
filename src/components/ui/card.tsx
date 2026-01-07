import type React from "react";

interface CardProps {
	children: React.ReactNode;
	className?: string;
	hover?: boolean;
}

export default function Card({
	children,
	className = "",
	hover = false,
}: CardProps) {
	return (
		<div
			className={`rounded-sm border border-border bg-card ${
				hover
					? "transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
					: ""
			} ${className}`}
		>
			{children}
		</div>
	);
}
