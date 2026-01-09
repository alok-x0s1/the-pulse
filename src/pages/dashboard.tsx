import { motion } from "framer-motion";
import {
	useMetrics,
	usePriorityChart,
	useStatusChart,
	useTrendChart,
} from "../hooks/useAnalytics";
import { BarChart, LineChart, MetricCard, PieChart } from "../components/chart";
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

export default function Dashboard() {
	const { data: metrics, isLoading: metricsLoading } = useMetrics();
	const { data: statusData, isLoading: statusLoading } = useStatusChart();
	const { data: trendData, isLoading: trendLoading } = useTrendChart();
	const { data: priorityData, isLoading: priorityLoading } =
		usePriorityChart();

	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			className="space-y-8"
		>
			<motion.div variants={itemVariants}>
				<h1 className="text-4xl font-bold">Dashboard</h1>
				<p className="mt-2 text-text-muted">
					Welcome back! Here's your analytics overview.
				</p>
			</motion.div>

			<motion.div
				variants={itemVariants}
				className="grid gap-4 md:grid-cols-4"
			>
				<MetricCard
					label="Total Items"
					value={metrics?.totalItems || 0}
					isLoading={metricsLoading}
					color="from-blue-500 to-blue-600"
				/>
				<MetricCard
					label="Active"
					value={metrics?.activeItems || 0}
					isLoading={metricsLoading}
					color="from-emerald-500 to-emerald-600"
				/>
				<MetricCard
					label="Completed"
					value={metrics?.completedItems || 0}
					isLoading={metricsLoading}
					color="from-amber-500 to-amber-600"
				/>
				<MetricCard
					label="Archived"
					value={metrics?.archivedItems || 0}
					isLoading={metricsLoading}
					color="from-slate-500 to-slate-600"
				/>
			</motion.div>

			<motion.div
				variants={itemVariants}
				className="grid gap-6 lg:grid-cols-2"
			>
				<Card className="p-6 lg:col-span-1">
					<h3 className="mb-6 font-semibold">Status Distribution</h3>
					<div className="flex h-64 items-center justify-center">
						{statusLoading ? (
							<div className="h-6 w-6 animate-spin rounded-full border-2 border-border border-t-primary" />
						) : (
							<PieChart data={statusData || []} />
						)}
					</div>
				</Card>

				<Card className="p-6 lg:col-span-1">
					<h3 className="mb-6 font-semibold">Items by Status</h3>
					<div className="flex h-64 items-center justify-center">
						{statusLoading ? (
							<div className="h-6 w-6 animate-spin rounded-full border-2 border-border border-t-primary" />
						) : (
							<BarChart data={statusData || []} />
						)}
					</div>
				</Card>
			</motion.div>

			<motion.div
				variants={itemVariants}
				className="grid gap-6 lg:grid-cols-2"
			>
				<Card className="p-6">
					<h3 className="mb-6 font-semibold">Items by Priority</h3>

					<div className="h-64">
						{priorityLoading ? (
							<div className="h-6 w-6 animate-spin rounded-full border-2 border-border border-t-primary mx-auto mt-24" />
						) : (
							<BarChart data={priorityData ?? []} />
						)}
					</div>
				</Card>

				<Card className="p-6">
					<h3 className="mb-6 font-semibold">
						Priority Distribution
					</h3>

					<div className="h-64">
						{priorityLoading ? (
							<div className="h-6 w-6 animate-spin rounded-full border-2 border-border border-t-primary mx-auto mt-24" />
						) : (
							<PieChart data={priorityData ?? []} />
						)}
					</div>
				</Card>
			</motion.div>

			<motion.div variants={itemVariants}>
				<Card className="p-6">
					<h3 className="mb-6 font-semibold">Creation Trend</h3>
					<div className="flex h-80 items-center justify-center">
						{trendLoading ? (
							<div className="h-6 w-6 animate-spin rounded-full border-2 border-border border-t-primary" />
						) : (
							<LineChart data={trendData || []} />
						)}
					</div>
				</Card>
			</motion.div>
		</motion.div>
	);
}
