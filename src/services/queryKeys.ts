export const queryKeys = {
	items: {
		all: ["items"] as const,
		list: () => [...queryKeys.items.all, "list"] as const,
		detail: (id: string) => [...queryKeys.items.all, "detail", id] as const,
	},
	analytics: {
		all: ["analytics"] as const,
		dashboard: () => [...queryKeys.analytics.all, "dashboard"] as const,
		metrics: () => [...queryKeys.analytics.all, "metrics"] as const,
	},
} as const;
