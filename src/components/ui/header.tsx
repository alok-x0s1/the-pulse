import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";

export default function Header() {
	const { theme, toggleTheme } = useTheme();

	return (
		<header className="border-b border-border bg-card">
			<div className="flex items-center justify-between px-4 py-4 md:px-8">
				<div className="flex-1" />
				<motion.button
					onClick={toggleTheme}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-card transition-colors hover:bg-background"
				>
					{theme === "dark" ? (
						<Sun size={20} className="text-accent" />
					) : (
						<Moon size={20} className="text-foreground" />
					)}
				</motion.button>
			</div>
		</header>
	);
}
