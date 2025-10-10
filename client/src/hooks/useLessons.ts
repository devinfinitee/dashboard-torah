import { useQuery } from '@tanstack/react-query';
import { getLessons, type Lesson } from '@/lib/api';

/**
 * Hook to fetch lessons from the backend API
 */
export function useLessons() {
  return useQuery<Lesson[]>({
    queryKey: ['lessons'],
    queryFn: getLessons,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
    retry: 1,
  });
}
