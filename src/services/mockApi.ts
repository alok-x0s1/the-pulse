import type { Item, ChartData, DashboardMetrics } from "../types";

function initializeMockData() {
	const existing = localStorage.getItem("mock_items");
	if (!existing) {
		const defaultItems: Item[] = [
			{
				id: "1",
				title: "Setup React Project",
				description: "Initialize new React application with Vite",
				status: "completed",
				priority: "high",
				createdAt: new Date("2024-01-10"),
				updatedAt: new Date("2024-01-12"),
			},
			{
				id: "2",
				title: "Implement TanStack Query",
				description: "Integrate React Query for state management",
				status: "active",
				priority: "high",
				createdAt: new Date("2024-01-12"),
				updatedAt: new Date("2024-01-13"),
			},
			{
				id: "3",
				title: "Add Dark Mode Support",
				description: "Implement theme switching functionality",
				status: "active",
				priority: "medium",
				createdAt: new Date("2024-01-13"),
				updatedAt: new Date("2024-01-14"),
			},
			{
				id: "4",
				title: "Create Dashboard Charts",
				description: "Build analytics visualization with Recharts",
				status: "active",
				priority: "medium",
				createdAt: new Date("2024-01-14"),
				updatedAt: new Date("2024-01-15"),
			},
		];
		localStorage.setItem("mock_items", JSON.stringify(defaultItems));
	}
}

initializeMockData();

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockApi = {
	async getItems(): Promise<Item[]> {
		await delay(300);
		const data = localStorage.getItem("mock_items");
		return data ? JSON.parse(data) : [];
	},

	async getItem(id: string): Promise<Item | null> {
		await delay(200);
		const items = await this.getItems();
		return items.find((item) => item.id === id) || null;
	},

	async createItem(
		item: Omit<Item, "id" | "createdAt" | "updatedAt">
	): Promise<Item> {
		await delay(400);
		const items = await this.getItems();
		const newItem: Item = {
			...item,
			id: Date.now().toString(),
			createdAt: new Date(),
			updatedAt: new Date(),
		};
		localStorage.setItem("mock_items", JSON.stringify([...items, newItem]));
		return newItem;
	},

	async updateItem(id: string, updates: Partial<Item>): Promise<Item> {
		await delay(300);
		const items = await this.getItems();
		const index = items.findIndex((item) => item.id === id);
		if (index === -1) throw new Error("Item not found");

		items[index] = {
			...items[index],
			...updates,
			id: items[index].id,
			createdAt: items[index].createdAt,
			updatedAt: new Date(),
		};
		localStorage.setItem("mock_items", JSON.stringify(items));
		return items[index];
	},

	async deleteItem(id: string): Promise<void> {
		await delay(300);
		const items = await this.getItems();
		const filtered = items.filter((item) => item.id !== id);
		localStorage.setItem("mock_items", JSON.stringify(filtered));
	},

	async getMetrics(): Promise<DashboardMetrics> {
		await delay(300);
		const items = await this.getItems();
		return {
			totalItems: items.length,
			activeItems: items.filter((i) => i.status === "active").length,
			completedItems: items.filter((i) => i.status === "completed")
				.length,
			archivedItems: items.filter((i) => i.status === "archived").length,
		};
	},

	async getChartData(): Promise<{
		statusData: ChartData[];
		priorityData: ChartData[];
	}> {
		await delay(300);
		const items = await this.getItems();

		const statusData = [
			{
				name: "Active",
				value: items.filter((i) => i.status === "active").length,
			},
			{
				name: "Completed",
				value: items.filter((i) => i.status === "completed").length,
			},
			{
				name: "Archived",
				value: items.filter((i) => i.status === "archived").length,
			},
		];

		const priorityData = [
			{
				name: "Low",
				value: items.filter((i) => i.priority === "low").length,
			},
			{
				name: "Medium",
				value: items.filter((i) => i.priority === "medium").length,
			},
			{
				name: "High",
				value: items.filter((i) => i.priority === "high").length,
			},
		];

		return { statusData, priorityData };
	},

	async getTrendData(): Promise<ChartData[]> {
		await delay(300);
		const items = await this.getItems();
		const last7Days: ChartData[] = [];

		for (let i = 6; i >= 0; i--) {
			const date = new Date();
			date.setDate(date.getDate() - i);
			const dateStr = date.toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
			});

			const count = items.filter((item) => {
				const itemDate = new Date(item.createdAt);
				return (
					itemDate.getDate() === date.getDate() &&
					itemDate.getMonth() === date.getMonth() &&
					itemDate.getFullYear() === date.getFullYear()
				);
			}).length;

			last7Days.push({ name: dateStr, value: count });
		}

		return last7Days;
	},
};
