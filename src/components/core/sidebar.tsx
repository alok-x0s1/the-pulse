import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
	const [isOpen, setIsOpen] = useState(true);
	const [isMobile, setIsMobile] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const handleResize = () => {
			const mobile = window.innerWidth < 768;
			setIsMobile(mobile);
			if (!mobile) setIsOpen(true);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const navItems = [
		{ label: "Dashboard", path: "/dashboard" },
		{ label: "Items", path: "/items" },
		{ label: "Settings", path: "/settings" },
	];

	const isActive = (path: string) => location.pathname === path;

	return (
		<>
			{isMobile && (
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-sm bg-card md:hidden"
				>
					{isOpen ? <X size={20} /> : <Menu size={20} />}
				</button>
			)}

			<motion.aside
				initial={{ x: isMobile && !isOpen ? -300 : 0 }}
				animate={{ x: isMobile && !isOpen ? -300 : 0 }}
				transition={{ duration: 0.3 }}
				className="fixed inset-y-0 left-0 z-40 w-64 border-r border-border bg-card md:relative md:translate-x-0"
			>
				<div className="flex h-full flex-col">
					<div className="flex items-center gap-3 border-b border-border px-6 py-5">
						<div className="flex h-8 w-8 items-center justify-center rounded-sm bg-linear-to-br from-primary to-accent">
							<span className="text-sm font-bold text-white">
								tP
							</span>
						</div>
						<h1 className="text-lg font-bold">Dashboard</h1>
					</div>

					<nav className="flex-1 space-y-2 px-4 py-6">
						{navItems.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								onClick={() => isMobile && setIsOpen(false)}
							>
								<motion.div
									className={`relative rounded-sm px-4 py-3 text-sm font-medium transition-colors ${
										isActive(item.path)
											? "bg-primary/10 text-primary"
											: "text-text-muted hover:bg-card hover:text-foreground"
									}`}
									whileHover={{ x: 4 }}
									whileTap={{ scale: 0.98 }}
								>
									{item.label}
									{isActive(item.path) && (
										<motion.div
											layoutId="active-nav"
											className="absolute inset-0 rounded-sm border border-primary/30 bg-primary/5"
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
										/>
									)}
								</motion.div>
							</Link>
						))}
					</nav>

					<div className="border-t border-border px-4 py-4 text-xs text-text-muted">
						<p>ThePulse</p>
						<p className="mt-1">Built with React & Typescript</p>
					</div>
				</div>
			</motion.aside>
		</>
	);
}
