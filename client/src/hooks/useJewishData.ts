import { useQuery } from '@tanstack/react-query';
import {
  getWeeklyTorahPortion,
  getUpcomingHolidays,
  getDafYomi,
  getJewishDate,
  getCandleLightingTimes,
  type TorahPortion,
  type JewishHoliday,
  type DafYomi
} from '@/lib/jewishApi';

/**
 * Hook to fetch weekly Torah portion
 */
export function useWeeklyTorahPortion() {
  return useQuery<TorahPortion | null>({
    queryKey: ['torahPortion'],
    queryFn: getWeeklyTorahPortion,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    refetchOnWindowFocus: false,
  });
}

/**
 * Hook to fetch upcoming Jewish holidays
 */
export function useUpcomingHolidays(limit: number = 5) {
  return useQuery<JewishHoliday[]>({
    queryKey: ['holidays', limit],
    queryFn: () => getUpcomingHolidays(limit),
    staleTime: 1000 * 60 * 60 * 12, // 12 hours
    refetchOnWindowFocus: false,
  });
}

/**
 * Hook to fetch Daf Yomi
 */
export function useDafYomi() {
  return useQuery<DafYomi | null>({
    queryKey: ['dafYomi', new Date().toDateString()],
    queryFn: getDafYomi,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    refetchOnWindowFocus: false,
  });
}

/**
 * Hook to fetch Jewish date
 */
export function useJewishDate() {
  return useQuery<string>({
    queryKey: ['jewishDate', new Date().toDateString()],
    queryFn: getJewishDate,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    refetchOnWindowFocus: false,
  });
}

/**
 * Hook to fetch candle lighting times
 */
export function useCandleLightingTimes(geonameid?: number) {
  return useQuery({
    queryKey: ['candleLighting', geonameid],
    queryFn: () => getCandleLightingTimes(geonameid),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    refetchOnWindowFocus: false,
  });
}
