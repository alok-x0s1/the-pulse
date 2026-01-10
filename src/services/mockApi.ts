import type { Item, ChartData, DashboardMetrics } from "../types";

function initializeMockData() {
	const existing = localStorage.getItem("mock_items");
	const now = new Date();
	const daysAgo = (d: number) =>
		new Date(now.getTime() - d * 24 * 60 * 60 * 1000);
	if (!existing) {
		const defaultItems: Item[] = [
			{
				id: "1",
				title: "Project Initialization and Tooling Setup",
				description:
					"This task focused on setting up the foundational structure of the React application using Vite for fast builds and hot module replacement. The goal was to establish a clean project architecture with proper folder separation for components, hooks, services, and utilities. ESLint and Prettier were configured to enforce consistent code style and reduce potential bugs during development. Environment variables were added for configuration flexibility, and Git was initialized with an appropriate `.gitignore` file. This setup ensured that future development would be scalable, maintainable, and aligned with modern frontend best practices. Proper tooling at this stage significantly reduced friction in later development phases and improved overall developer experience.",
				status: "completed",
				priority: "high",
				createdAt: daysAgo(340),
				updatedAt: daysAgo(335),
			},
			{
				id: "2",
				title: "State Management with TanStack Query",
				description:
					"This task involved integrating TanStack Query to manage server state efficiently across the application. The objective was to replace manual data fetching logic with a robust caching, refetching, and synchronization mechanism. Queries were structured using meaningful query keys to ensure consistency and scalability. Loading, error, and success states were handled gracefully to improve user experience. The integration also laid the foundation for features like background refetching and optimistic updates. This change significantly simplified asynchronous data handling logic and reduced boilerplate code while improving performance and reliability.",
				status: "completed",
				priority: "high",
				createdAt: daysAgo(310),
				updatedAt: daysAgo(305),
			},
			{
				id: "3",
				title: "Dark Mode and Theme Architecture",
				description:
					"The objective of this task was to implement a robust dark mode system that works consistently across the entire application. A centralized theme configuration was introduced to control colors, typography, and component styling. The solution supports both system preferences and manual user toggling. Care was taken to ensure proper contrast, accessibility, and visual consistency in both light and dark themes. This enhancement greatly improved usability, especially for users working in low-light environments, and aligned the application with modern UI expectations.",
				status: "completed",
				priority: "medium",
				createdAt: daysAgo(280),
				updatedAt: daysAgo(275),
			},
			{
				id: "4",
				title: "Dashboard Metrics Architecture",
				description:
					"This task focused on designing and implementing the core analytics metrics displayed on the dashboard. The metrics included total items, active items, completed items, and archived items. The logic was centralized within reusable hooks to ensure consistency across the application. The metrics were designed to update automatically when underlying data changes, ensuring real-time accuracy. This work laid the foundation for a data-driven dashboard and enabled users to quickly understand the overall state of the system at a glance.",
				status: "completed",
				priority: "high",
				createdAt: daysAgo(250),
				updatedAt: daysAgo(245),
			},
			{
				id: "5",
				title: "Status Distribution Charts",
				description:
					"This task involved creating visual representations of item statuses using pie and bar charts. The goal was to provide users with an immediate understanding of how work is distributed across different states. Recharts was used to implement responsive and accessible charts. The data was derived from a centralized analytics source to avoid inconsistencies. Tooltips and legends were added to improve clarity and usability. This feature significantly enhanced the dashboard by turning raw numbers into meaningful visual insights.",
				status: "completed",
				priority: "medium",
				createdAt: daysAgo(220),
				updatedAt: daysAgo(215),
			},
			{
				id: "6",
				title: "Priority-Based Analytics Visualization",
				description:
					"The purpose of this task was to visualize item priorities across the system. Separate charts were created to show the distribution of low, medium, and high priority tasks. This helped identify workload pressure areas and planning bottlenecks. The implementation ensured that priority data was clearly separated from status data to avoid confusion. This visualization plays a critical role in decision-making and resource allocation by highlighting which tasks require immediate attention.",
				status: "completed",
				priority: "medium",
				createdAt: daysAgo(190),
				updatedAt: daysAgo(185),
			},
			{
				id: "7",
				title: "Creation Trend Analytics (Monthly)",
				description:
					"This task implemented a monthly creation trend chart spanning the last year. The chart aggregates item creation data by month to provide a high-level view of system activity over time. This approach avoids noisy daily fluctuations and presents a clear long-term trend. The logic handles date normalization and ensures accurate grouping even across year boundaries. This feature is particularly useful for identifying growth patterns and seasonal activity changes.",
				status: "active",
				priority: "high",
				createdAt: daysAgo(160),
				updatedAt: daysAgo(155),
			},
			{
				id: "8",
				title: "Reusable Chart Components",
				description:
					"The objective of this task was to abstract chart implementations into reusable components. Pie, bar, and line charts were standardized with consistent styling, tooltips, and legends. This reduced duplication and made it easier to introduce new analytics views in the future. The components were designed to be flexible, accepting data and configuration through props. This approach improved maintainability and ensured a consistent visual language across the dashboard.",
				status: "active",
				priority: "medium",
				createdAt: daysAgo(140),
				updatedAt: daysAgo(135),
			},

			{
				id: "9",
				title: "Performance Optimization for Analytics",
				description:
					"This task focused on improving dashboard performance by reducing unnecessary re-renders and optimizing query behavior. TanStack Query features such as query invalidation, caching, and placeholder data were leveraged to enhance responsiveness. Chart components were reviewed to ensure they re-render only when relevant data changes. These optimizations resulted in smoother interactions, faster load times, and an overall improved user experience.",
				status: "active",
				priority: "high",
				createdAt: daysAgo(90),
				updatedAt: daysAgo(85),
			},
			{
				id: "10",
				title: "Improved Loading States and UX",
				description:
					"This task introduced refined loading states across the dashboard. Instead of blocking the entire page, each metric and chart now displays its own loader or skeleton. This approach provides immediate visual feedback and improves perceived performance. Special attention was given to ensuring loaders are accessible and visually consistent with the overall theme. These improvements significantly enhanced the user experience during data fetching and refetching.",
				status: "active",
				priority: "medium",
				createdAt: daysAgo(60),
				updatedAt: daysAgo(55),
			},
			{
				id: "11",
				title: "Recent Feature Enhancements and Cleanup",
				description:
					"This task focused on refining existing features and cleaning up legacy code. Unused utilities were removed, naming conventions were standardized, and comments were added where necessary to improve readability. Small UX issues discovered during testing were addressed. This ongoing maintenance work helps keep the codebase clean, understandable, and easy to extend in the future.",
				status: "active",
				priority: "low",
				createdAt: daysAgo(30),
				updatedAt: daysAgo(25),
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
		const items = await mockApi.getItems();
		return items.find((item) => item.id === id) || null;
	},

	async createItem(
		item: Omit<Item, "id" | "createdAt" | "updatedAt">
	): Promise<Item> {
		await delay(400);
		const items = await mockApi.getItems();
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
		const items = await mockApi.getItems();
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
		const items = await mockApi.getItems();
		const filtered = items.filter((item) => item.id !== id);
		localStorage.setItem("mock_items", JSON.stringify(filtered));
	},

	async getMetrics(): Promise<DashboardMetrics> {
		const items = await mockApi.getItems();
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
		const items = await mockApi.getItems();

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
		const items = await mockApi.getItems();

		const result: ChartData[] = [];
		const now = new Date();

		for (let i = 11; i >= 0; i--) {
			const startOfMonth = new Date(
				now.getFullYear(),
				now.getMonth() - i,
				1
			);

			const endOfMonth = new Date(
				now.getFullYear(),
				now.getMonth() - i + 1,
				0,
				23,
				59,
				59
			);

			const label = startOfMonth.toLocaleDateString("en-US", {
				month: "short",
				year: "numeric",
			});

			const count = items.filter((item) => {
				const createdAt = new Date(item.createdAt);
				return createdAt >= startOfMonth && createdAt <= endOfMonth;
			}).length;

			result.push({
				name: label,
				value: count,
			});
		}

		return result;
	},
};
