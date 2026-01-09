import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { mockApi } from "../services/mockApi";
import { queryKeys } from "../services/queryKeys";
import type { Item } from "../types";

export function useItems() {
	return useQuery({
		queryKey: queryKeys.items.list(),
		queryFn: () => mockApi.getItems(),
	});
}

export function useItem(id: string) {
	return useQuery({
		queryKey: queryKeys.items.detail(id),
		queryFn: () => mockApi.getItem(id),
		enabled: !!id,
	});
}

export function useCreateItem() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (item: Omit<Item, "id" | "createdAt" | "updatedAt">) =>
			mockApi.createItem(item),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: queryKeys.items.list() });
			queryClient.invalidateQueries({
				queryKey: queryKeys.analytics.all,
			});
		},
	});
}

export function useUpdateItem() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: ({ id, updates }: { id: string; updates: Partial<Item> }) =>
			mockApi.updateItem(id, updates),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: queryKeys.items.list() });
			queryClient.invalidateQueries({
				queryKey: queryKeys.analytics.all,
			});
		},
	});
}

export function useDeleteItem() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (id: string) => mockApi.deleteItem(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: queryKeys.items.list() });
			queryClient.invalidateQueries({
				queryKey: queryKeys.analytics.all,
			});
		},
	});
}
