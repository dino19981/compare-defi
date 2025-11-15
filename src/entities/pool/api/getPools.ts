import { PoolItem } from 'entities/pool/types';
import { axiosInstance } from 'shared/api';
import {
  PoolItemPlatformDtoNameEnum,
  PoolsControllerGetPoolItemsParams,
  PoolsResponseDto,
} from 'shared/api/generated/Api';
import { formatNumber, formatPercentage, getCompanyLogoByName } from 'shared/lib';
import { CACHE_CONFIG } from 'shared/lib/cache';

import { PoolMeta } from '../types/PoolMeta';

export interface GetPoolsResponse {
  items: PoolItem[];
  meta: PoolMeta;
  pagination: {
    total: number;
  };
}

export const getPools = async (
  params?: PoolsControllerGetPoolItemsParams,
): Promise<GetPoolsResponse> => {
  const { data } = await axiosInstance.get<PoolsResponseDto>('/pools', {
    params,
    // Настройка кеширования для API запросов
    headers: CACHE_CONFIG.STATIC.headers,
  });

  return {
    items: mapToFrontendData(data.data),
    meta: {
      platforms: data.meta.platforms.map((platformName) => ({
        name: platformName as PoolItemPlatformDtoNameEnum,
        icon: getCompanyLogoByName(platformName),
      })),
    },
    pagination: {
      total: data.pagination.total,
    },
  };
};

function mapToFrontendData(pools: PoolsResponseDto['data']): PoolItem[] {
  return pools.map((pool) => ({
    ...pool,
    apr: formatPercentage(pool.apr)?.toString() ?? 'not defined',
    tvl: formatNumber(+(+pool.tvl).toFixed(), ' '),
    platform: {
      ...pool.platform,
      icon: getCompanyLogoByName(pool.platform.name),
    },
  }));
}
