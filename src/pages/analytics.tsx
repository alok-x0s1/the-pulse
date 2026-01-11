import { motion } from "framer-motion";
import { TrendingUp, Activity, Users, Zap } from "lucide-react";
import { useAnalytics } from "../hooks/useAnalytics";
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

export default function Analytics() {
	const { data: analyticsData, isLoading } = useAnalytics();

	if (isLoading) {
		return (
			<div className="flex h-[80vh] items-center justify-center">
				<div className="h-8 w-8 animate-spin rounded-full border-2 border-border! border-t-primary!" />
			</div>
		);
	}

	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			className="space-y-8"
		>
			<motion.div variants={itemVariants}>
				<h1 className="text-4xl font-bold">Analytics & Insights</h1>
				<p className="mt-2 text-text-muted">
					Comprehensive overview of your dashboard metrics and trends.
				</p>
			</motion.div>

			<motion.div
				variants={itemVariants}
				className="grid gap-4 md:grid-cols-4"
			>
				<MetricCard
					icon={Activity}
					label="Total Items"
					value={analyticsData?.metrics.totalItems || 0}
					isLoading={isLoading}
				/>
				<MetricCard
					icon={TrendingUp}
					label="Active Items"
					value={analyticsData?.metrics.activeItems || 0}
					change="+8%"
					isLoading={isLoading}
				/>
				<MetricCard
					icon={Users}
					label="Completed"
					value={analyticsData?.metrics.completedItems || 0}
					change="+23%"
					isLoading={isLoading}
				/>
				<MetricCard
					icon={Zap}
					label="Archived"
					value={analyticsData?.metrics.archivedItems || 0}
					change="+5%"
					isLoading={isLoading}
				/>
			</motion.div>

			<div className="grid gap-6 md:grid-cols-2">
				<motion.div variants={itemVariants} className="md:col-span-2">
					<Card className="p-6">
						<h2 className="mb-6 text-lg font-semibold">
							Item Growth
						</h2>
						{analyticsData?.growthData && (
							<div className="h-80">
								<LineChart data={analyticsData.growthData} />
							</div>
						)}
					</Card>
				</motion.div>

				<motion.div variants={itemVariants}>
					<Card className="p-6">
						<h2 className="mb-6 text-lg font-semibold">
							Status Distribution
						</h2>
						{analyticsData?.statusData && (
							<div className="h-80">
								<PieChart data={analyticsData.statusData} />
							</div>
						)}
					</Card>
				</motion.div>

				<motion.div variants={itemVariants}>
					<Card className="p-6">
						<h2 className="mb-6 text-lg font-semibold">
							Priority Breakdown
						</h2>
						{analyticsData?.priorityData && (
							<div className="h-80">
								<BarChart data={analyticsData.priorityData} />
							</div>
						)}
					</Card>
				</motion.div>
			</div>

			<motion.div variants={itemVariants}>
				<Card className="p-6">
					<h2 className="mb-4 text-lg font-semibold">Key Insights</h2>
					<ul className="space-y-2 text-sm text-text-muted">
						<li>
							• You have {analyticsData?.metrics.activeItems}{" "}
							active items requiring attention
						</li>
						<li>
							• {analyticsData?.metrics.completedItems} items have
							been completed successfully
						</li>
						<li>
							• High priority items account for{" "}
							{Math.round(
								((analyticsData?.metrics.activeItems || 0) /
									(analyticsData?.metrics.totalItems || 1)) *
									100
							)}
							% of your workload
						</li>
						<li>
							• Your completion rate is trending upward this week
						</li>
					</ul>
				</Card>
			</motion.div>
		</motion.div>
	);
}
