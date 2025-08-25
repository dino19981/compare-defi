import { useMemo } from 'react';

interface ImageOptimizationConfig {
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  quality?: number;
}

export const useImageOptimization = (
  src: string | undefined,
  config: ImageOptimizationConfig = {},
) => {
  const optimizedConfig = useMemo(
    () => ({
      priority: config.priority ?? false,
      loading: config.loading ?? 'lazy',
      sizes: config.sizes ?? '100vw',
      quality: config.quality ?? 75,
    }),
    [config.priority, config.loading, config.sizes, config.quality],
  );

  const imageKey = useMemo(() => {
    if (!src) return '';
    // Создаем уникальный ключ для кеширования
    return `${src}_${optimizedConfig.quality}_${optimizedConfig.sizes}`;
  }, [src, optimizedConfig.quality, optimizedConfig.sizes]);

  return {
    ...optimizedConfig,
    imageKey,
  };
};
