/**
 * Утилиты для управления кешированием
 */

// Константы для времени кеширования
export const CACHE_TIMES = {
  HOUR: 3600, // 1 час
  HALF_HOUR: 1800, // 30 минут
  QUARTER_HOUR: 900, // 15 минут
  FIVE_MINUTES: 300, // 5 минут
  MINUTE: 60, // 1 минута
} as const;

/**
 * Создает заголовки для кеширования
 * @param maxAge - время кеширования в секундах
 * @param sMaxAge - время кеширования для CDN в секундах (по умолчанию равно maxAge)
 * @returns объект с заголовками кеширования
 */
export const createCacheHeaders = (maxAge: number, sMaxAge?: number) => ({
  'Cache-Control': `public, max-age=${maxAge}, s-maxage=${sMaxAge || maxAge}`,
});

/**
 * Настройки кеширования для разных типов данных
 */
export const CACHE_CONFIG = {
  // Статические данные - кешируются на час
  STATIC: {
    revalidate: CACHE_TIMES.HOUR,
    headers: createCacheHeaders(CACHE_TIMES.HOUR),
  },
  // Динамические данные - кешируются на 15 минут
  DYNAMIC: {
    revalidate: CACHE_TIMES.QUARTER_HOUR,
    headers: createCacheHeaders(CACHE_TIMES.QUARTER_HOUR),
  },
  // Критически важные данные - кешируются на 5 минут
  CRITICAL: {
    revalidate: CACHE_TIMES.FIVE_MINUTES,
    headers: createCacheHeaders(CACHE_TIMES.FIVE_MINUTES),
  },
} as const;

/**
 * Типы кеширования
 */
export type CacheType = keyof typeof CACHE_CONFIG;
