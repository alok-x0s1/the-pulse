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
	[key: string]: string | number | undefined;
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

export interface AnalyticsData {
	metrics: {
		totalItems: number;
		activeItems: number;
		completedItems: number;
		archivedItems: number;
	};
	growthData: Array<{ name: string; value: number }>;
	statusData: Array<{ name: string; value: number }>;
	priorityData: Array<{ name: string; value: number }>;
}
