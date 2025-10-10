import { useQuery } from '@tanstack/react-query';
import { getTopics, type Topic } from '@/lib/api';

/**
 * Hook to fetch topics from the backend API
 */
export function useTopics() {
  return useQuery<Topic[]>({
    queryKey: ['topics'],
    queryFn: getTopics,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
    retry: 1,
  });
}
