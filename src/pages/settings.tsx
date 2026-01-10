import { motion } from "framer-motion";
import { Moon, Sun, ExternalLink } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import Card from "../components/ui/card";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5 },
	},
};

export default function Settings() {
	const { theme, toggleTheme } = useTheme();

	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			className="space-y-8 max-w-full"
		>
			<motion.div variants={itemVariants}>
				<h1 className="text-4xl font-bold">Settings</h1>
				<p className="mt-2 text-text-muted">
					Manage your application preferences and configuration.
				</p>
			</motion.div>

			<motion.div variants={itemVariants}>
				<Card className="p-6">
					<div className="flex items-center justify-between">
						<div>
							<h3 className="text-lg font-semibold">
								Appearance
							</h3>
							<p className="mt-1 text-text-muted">
								Choose between light and dark mode
							</p>
						</div>
						<motion.button
							onClick={toggleTheme}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 w-40 whitespace-nowrap font-medium transition-all hover:border-primary/50"
						>
							{theme === "dark" ? (
								<>
									<Sun size={20} className="text-accent" />
									Light Mode
								</>
							) : (
								<>
									<Moon size={20} className="text-primary" />
									Dark Mode
								</>
							)}
						</motion.button>
					</div>
				</Card>
			</motion.div>

			<motion.div variants={itemVariants}>
				<Card className="p-6">
					<h3 className="mb-4 text-lg font-semibold">
						Project Information
					</h3>
					<div className="space-y-4">
						<div className="flex justify-between border-b border-border py-4">
							<span className="text-text-muted">Application</span>
							<span className="font-medium">ThePulse v1.0</span>
						</div>
						<div className="flex justify-between border-b border-border py-4">
							<span className="text-text-muted">Framework</span>
							<span className="font-medium">React.js 19</span>
						</div>
						<div className="flex justify-between border-b border-border py-4">
							<span className="text-text-muted">Language</span>
							<span className="font-medium">TypeScript</span>
						</div>
						<div className="flex justify-between border-b border-border py-4">
							<span className="text-text-muted">Styling</span>
							<span className="font-medium">Tailwind CSS</span>
						</div>
						<div className="flex justify-between border-b border-border py-4">
							<span className="text-text-muted">
								State Management
							</span>
							<span className="font-medium">TanStack Query</span>
						</div>
						<div className="flex justify-between py-4">
							<span className="text-text-muted">Animations</span>
							<span className="font-medium">Framer Motion</span>
						</div>
					</div>
				</Card>
			</motion.div>

			<motion.div variants={itemVariants}>
				<Card className="p-6">
					<h3 className="mb-4 text-lg font-semibold">
						Core Technologies
					</h3>
					<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
						{[
							{
								name: "React.js",
								desc: "Popular JavaScript framework",
							},
							{
								name: "Vite",
								desc: "Fast build tool",
							},
							{
								name: "React Router DOM",
								desc: "Routing library for React.js",
							},
							{
								name: "TypeScript",
								desc: "Type-safe JavaScript",
							},
							{
								name: "Tailwind CSS",
								desc: "Styling library",
							},
							{
								name: "TanStack Query",
								desc: "Data fetching and state management",
							},
							{
								name: "Framer Motion",
								desc: "Animation library for React.js",
							},
							{
								name: "Recharts",
								desc: "Data visualization library",
							},
							{
								name: "Lucide Icons",
								desc: "Icon library",
							},
						].map((tech, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: i * 0.1 }}
								className="rounded-lg bg-background p-4"
							>
								<p className="font-medium">{tech.name}</p>
								<p className="text-sm text-text-muted">
									{tech.desc}
								</p>
							</motion.div>
						))}
					</div>
				</Card>
			</motion.div>

			<motion.div variants={itemVariants}>
				<Card className="border-primary/30 bg-primary/5 p-6">
					<h3 className="mb-2 text-lg font-semibold">
						AWS S3 Deployment Ready
					</h3>
					<p className="mb-4 text-text-muted">
						This application is optimized for deployment on AWS S3
						with CloudFront CDN for global distribution.
					</p>
					<div className="space-y-2 text-sm">
						<p>
							<span className="font-medium">Build Output:</span>{" "}
							Located in{" "}
							<code className="text-accent">dist/</code> folder
						</p>
						<p>
							<span className="font-medium">Build Command:</span>{" "}
							<code className="text-accent">npm run build</code>
						</p>
						<p>
							<span className="font-medium">
								Production Ready:
							</span>{" "}
							Optimized for performance and scalability
						</p>
					</div>
				</Card>
			</motion.div>

			<motion.div variants={itemVariants} className="flex gap-4">
				<a
					href="#"
					className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 font-medium transition-colors hover:bg-background hover:border-primary/50"
				>
					Documentation
					<ExternalLink size={14} />
				</a>
			</motion.div>
		</motion.div>
	);
}
