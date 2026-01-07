import { motion } from "framer-motion";
import { useItems } from "../hooks/useItems";
import Card from "../components/ui/card";
import Button from "../components/ui/button";
import { ArrowLeft, Edit2, Calendar, Flag, CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { useNavigate, useParams } from "react-router-dom";

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

const statusColors = {
	active: "bg-emerald-500/20 text-emerald-400 border-emerald-500/50",
	completed: "bg-blue-500/20 text-blue-400 border-blue-500/50",
	archived: "bg-slate-500/20 text-slate-400 border-slate-500/50",
};

const priorityColors = {
	low: "bg-blue-500/20 text-blue-400 border-blue-500/50",
	medium: "bg-amber-500/20 text-amber-400 border-amber-500/50",
	high: "bg-error/20 text-error border-error/50",
};

const priorityIcons = {
	low: "Low Priority",
	medium: "Medium Priority",
	high: "High Priority",
};

export default function ItemDetails() {
	const navigate = useNavigate();
	const params = useParams();
	const itemId = params.id as string;

	const { data: items = [], isLoading } = useItems();
	const item = items.find((i) => i.id === itemId);

	if (isLoading) {
		return (
			<div className="flex h-[80vh] w-full items-center justify-center">
				<div className="h-8 w-8 animate-spin rounded-full border-2 border-border! border-t-primary!" />
			</div>
		);
	}

	if (!item) {
		return (
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="space-y-8"
			>
				<motion.button
					variants={itemVariants}
					onClick={() => navigate(-1)}
					className="flex items-center cursor-pointer gap-2 text-primary"
				>
					<ArrowLeft size={18} />
					Back
				</motion.button>

				<motion.div variants={itemVariants}>
					<Card className="p-12 text-center">
						<h2 className="mb-2 text-xl font-semibold">
							Item Not Found
						</h2>
						<p className="text-text-muted">
							The item you're looking for doesn't exist.
						</p>
					</Card>
				</motion.div>
			</motion.div>
		);
	}

	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			className="space-y-8"
		>
			<motion.button
				variants={itemVariants}
				onClick={() => navigate(-1)}
				className="flex cursor-pointer items-center gap-2 text-primary"
			>
				<ArrowLeft size={18} />
				Back to Items
			</motion.button>

			<motion.div
				variants={itemVariants}
				className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between"
			>
				<div className="flex-1">
					<h1 className="text-4xl font-bold">{item.title}</h1>
					<p className="mt-2 text-text-muted">
						Created {format(new Date(item.createdAt), "PPP")}
					</p>
				</div>
				<Button
					onClick={() => navigate(`/items?edit=${item.id}`)}
					className="gap-2"
				>
					<Edit2 size={18} />
					Edit Item
				</Button>
			</motion.div>

			<div className="grid gap-6 md:grid-cols-3">
				<motion.div variants={itemVariants} className="md:col-span-2">
					<Card className="p-8">
						<h2 className="mb-4 text-lg font-semibold">
							Description
						</h2>
						<p className="whitespace-pre-wrap text-text-muted">
							{item.description}
						</p>
					</Card>
				</motion.div>

				<motion.div variants={itemVariants} className="space-y-4">
					<Card className="p-6">
						<h3 className="mb-3 flex items-center gap-2 text-sm font-semibold">
							<CheckCircle size={16} />
							Status
						</h3>
						<span
							className={`inline-block rounded-full border px-3 py-2 text-xs font-medium ${
								statusColors[item.status]
							}`}
						>
							{item.status.charAt(0).toUpperCase() +
								item.status.slice(1)}
						</span>
					</Card>

					<Card className="p-6">
						<h3 className="mb-3 flex items-center gap-2 text-sm font-semibold">
							<Flag size={16} />
							Priority
						</h3>
						<span
							className={`inline-block rounded-full border px-3 py-2 text-xs font-medium ${
								priorityColors[item.priority]
							}`}
						>
							{priorityIcons[item.priority]}
						</span>
					</Card>

					<Card className="p-6">
						<h3 className="mb-4 flex items-center gap-2 text-sm font-semibold">
							<Calendar size={16} />
							Dates
						</h3>
						<div className="space-y-3 text-xs">
							<div>
								<p className="text-text-muted">Created</p>
								<p className="font-medium">
									{format(new Date(item.createdAt), "PPP p")}
								</p>
							</div>
							<div>
								<p className="text-text-muted">Last Updated</p>
								<p className="font-medium">
									{format(new Date(item.updatedAt), "PPP p")}
								</p>
							</div>
						</div>
					</Card>

					<Card className="p-6">
						<h3 className="mb-2 text-xs font-semibold text-text-muted">
							Item ID
						</h3>
						<p className="break-all font-mono text-xs">{item.id}</p>
					</Card>
				</motion.div>
			</div>
		</motion.div>
	);
}
