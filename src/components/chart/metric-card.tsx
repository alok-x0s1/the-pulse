import type { LucideIcon } from "lucide-react";

interface MetricCardProps {
	label: string;
	icon?: LucideIcon;
	value: number;
	isLoading: boolean;
	color?: string;
	change?: string;
}

export default function MetricCard({
	label,
	icon: Icon,
	value,
	isLoading,
	color,
	change,
}: MetricCardProps) {
	return (
		<div className="rounded-lg border border-border bg-card p-6">
			<div className="flex items-center justify-between">
				<p className="text-sm text-text-muted">{label}</p>

				{Icon && <Icon className="h-6 w-6 text-muted-foreground" />}
			</div>

			<div className="mt-4 flex items-end justify-between">
				<div>
					{isLoading ? (
						<div className="h-8 w-16 animate-pulse rounded bg-border" />
					) : (
						<p className="text-3xl font-bold flex items-end gap-2">
							{value}{" "}
							{change && (
								<span className="text-lg font-normal">
									({change})
								</span>
							)}
						</p>
					)}
				</div>

				<div
					className={`h-12 w-12 rounded-lg bg-linear-to-br ${color} opacity-20`}
				/>
			</div>
		</div>
	);
}
