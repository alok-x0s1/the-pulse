import { useEffect, useState } from "react";
import type { Theme } from "../types/theme";
import { ThemeContext } from "../contexts/theme-context";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme>(() => {
		const saved = localStorage.getItem("theme-local");
		return saved === "light" || saved === "dark" ? saved : "dark";
	});

	useEffect(() => {
		const root = document.documentElement;

		if (theme === "light") {
			root.classList.add("light");
		} else {
			root.classList.remove("light");
		}

		localStorage.setItem("theme-local", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === "dark" ? "light" : "dark"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
