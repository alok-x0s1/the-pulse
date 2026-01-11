import { useQuery } from "@tanstack/react-query";
import { mockApi } from "../services/mockApi";
import { queryKeys } from "../services/queryKeys";
import type { AnalyticsData, ChartData, DashboardMetrics } from "../types";

/* =======================
   METRICS
======================= */
export function useMetrics() {
	return useQuery<DashboardMetrics>({
		queryKey: queryKeys.analytics.metrics(),
		queryFn: mockApi.getMetrics,
	});
}

/* =======================
   STATUS CHART (Pie + Bar)
======================= */
export function useStatusChart() {
	return useQuery<ChartData[]>({
		queryKey: queryKeys.analytics.status(),
		queryFn: async () => {
			const { statusData } = await mockApi.getChartData();
			return statusData;
		},
	});
}

/* =======================
   PRIORITY CHART (Pie + Bar)
======================= */
export function usePriorityChart() {
	return useQuery<ChartData[]>({
		queryKey: queryKeys.analytics.priority(),
		queryFn: async () => {
			const { priorityData } = await mockApi.getChartData();
			return priorityData;
		},
	});
}

/* =======================
   TREND CHART (Line)
======================= */
export function useTrendChart() {
	return useQuery<ChartData[]>({
		queryKey: queryKeys.analytics.trend(),
		queryFn: mockApi.getTrendData,
	});
}

/* =======================
   ANALYTICS DATA
======================= */
export function useAnalytics() {
	return useQuery({
		queryKey: queryKeys.analytics.dashboard(),
		queryFn: async (): Promise<AnalyticsData> => {
			const metrics = await mockApi.getMetrics();
			const chartData = await mockApi.getChartData();
			const trendData = await mockApi.getTrendData();

			return {
				metrics,
				growthData: trendData,
				statusData: chartData.statusData || [],
				priorityData: chartData.priorityData || [],
			};
		},
	});
}
