import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();

	return (
		<motion.button
			onClick={toggleTheme}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-card transition-colors hover:bg-background cursor-pointer"
		>
			{theme === "dark" ? (
				<Sun size={20} className="text-accent" />
			) : (
				<Moon size={20} className="text-foreground" />
			)}
		</motion.button>
	);
}
