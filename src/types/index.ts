export interface Item {
	id: string;
	title: string;
	description: string;
	status: "active" | "completed" | "archived";
	priority: "low" | "medium" | "high";
	createdAt: Date;
	updatedAt: Date;
}

export interface ChartData {
	name: string;
	value: number;
	date?: string;
}

export interface DashboardMetrics {
	totalItems: number;
	activeItems: number;
	completedItems: number;
	archivedItems: number;
}
