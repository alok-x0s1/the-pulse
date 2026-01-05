import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Zap, Shield } from "lucide-react";
import Button from "../components/ui/button";

export default function Landing() {
	const navigate = useNavigate();

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
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

	return (
		<div className="min-h-screen bg-linear-to-br from-background via-background to-background">
			<header className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
				<div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
					<div className="flex items-center justify-between">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							className="flex items-center gap-3"
						>
							<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-primary to-accent">
								<span className="text-sm font-bold text-white">
									DA
								</span>
							</div>
							<h1 className="text-xl font-bold">
								Modern Dashboard
							</h1>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							className="flex gap-4"
						>
							<Button
								variant="ghost"
								onClick={() => navigate("/dashboard")}
							>
								Sign In
							</Button>
						</motion.div>
					</div>
				</div>
			</header>

			<section className="relative overflow-hidden px-4 py-20 md:px-8 md:py-32">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					className="pointer-events-none absolute inset-0"
				>
					<div className="absolute right-0 top-0 h-64 w-64 bg-primary/10 blur-3xl" />
					<div className="absolute bottom-0 left-0 h-64 w-64 bg-accent/10 blur-3xl" />
				</motion.div>

				<div className="relative mx-auto max-w-3xl">
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate="visible"
					>
						<motion.div
							variants={itemVariants}
							className="mb-4 inline-block"
						>
							<span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
								Welcome to the Future
							</span>
						</motion.div>

						<motion.h2
							variants={itemVariants}
							className="mb-6 text-5xl font-bold leading-tight md:text-6xl"
						>
							Modern Dashboard for Your Next Project
						</motion.h2>

						<motion.p
							variants={itemVariants}
							className="mb-8 text-lg text-text-muted"
						>
							A production-ready frontend application built with
							React, Vite, TypeScript, and TanStack Query.
							Features dark mode, real-time charts, and complete
							CRUD operations.
						</motion.p>

						<motion.div
							variants={itemVariants}
							className="flex flex-col gap-4 sm:flex-row"
						>
							<Button
								size="lg"
								onClick={() => navigate("/dashboard")}
								className="gap-2"
							>
								Get Started <ArrowRight size={18} />
							</Button>
							<Button size="lg" variant="secondary">
								Learn More
							</Button>
						</motion.div>
					</motion.div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="mb-12 text-center"
				>
					<h3 className="mb-4 text-3xl font-bold">
						Powerful Features
					</h3>
					<p className="text-text-muted">
						Everything you need to build a modern web application
					</p>
				</motion.div>

				<div className="grid gap-6 md:grid-cols-3">
					{[
						{
							icon: BarChart3,
							title: "Analytics Dashboard",
							description:
								"Real-time charts and metrics visualization with Recharts",
						},
						{
							icon: Zap,
							title: "Lightning Fast",
							description:
								"Built with Vite for instant HMR and blazing fast builds",
						},
						{
							icon: Shield,
							title: "Type Safe",
							description:
								"Full TypeScript support with strict mode enabled",
						},
					].map((feature, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: i * 0.1 }}
							viewport={{ once: true }}
						>
							<div className="group h-full rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
								<feature.icon className="mb-4 h-10 w-10 text-primary" />
								<h4 className="mb-2 font-semibold">
									{feature.title}
								</h4>
								<p className="text-sm text-text-muted">
									{feature.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="rounded-lg border border-border bg-card/50 p-8 backdrop-blur-sm md:p-12"
				>
					<h3 className="mb-8 text-2xl font-bold">
						Built with Modern Tech Stack
					</h3>
					<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
						{[
							"React 18+",
							"Vite",
							"TypeScript",
							"TanStack Query",
							"Framer Motion",
						].map((tech, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.3, delay: i * 0.05 }}
								viewport={{ once: true }}
								className="rounded-lg bg-background p-4 text-center text-sm font-medium"
							>
								{tech}
							</motion.div>
						))}
					</div>
				</motion.div>
			</section>

			<section className="relative overflow-hidden px-4 py-20 md:px-8">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="pointer-events-none absolute inset-0"
				>
					<div className="absolute left-0 top-0 h-64 w-64 bg-primary/10 blur-3xl" />
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="relative mx-auto max-w-2xl text-center"
				>
					<h3 className="mb-4 text-3xl font-bold">
						Ready to Get Started?
					</h3>
					<p className="mb-8 text-text-muted">
						Explore the dashboard and see the power of modern React
						development.
					</p>
					<Button
						size="lg"
						onClick={() => navigate("/dashboard")}
						className="mx-auto"
					>
						Go to Dashboard
					</Button>
				</motion.div>
			</section>

			<footer className="border-t border-border/50 bg-card/50 px-4 py-12 text-center text-sm text-text-muted md:px-8">
				<p>
					Built for AWS S3 Deployment. A learning project showcasing
					modern frontend architecture and best practices.
				</p>
			</footer>
		</div>
	);
}
