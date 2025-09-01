import { PoolItem } from 'entities/pool/types';
import { axiosInstance } from 'shared/api';
import { PoolsControllerGetPoolItemsParams, PoolsResponseDto } from 'shared/api/generated/Api';
import { formatNumber, formatPercentage, getCompanyLogoByName } from 'shared/lib';

import { PoolMeta } from '../types/PoolMeta';

interface GetPoolsResponse {
  items: PoolItem[];
  meta: PoolMeta;
}

export const getPools = async (
  params?: PoolsControllerGetPoolItemsParams,
): Promise<GetPoolsResponse> => {
  const { data } = await axiosInstance.get<PoolsResponseDto>('/pools', {
    params,
  });

  return {
    items: mapToFrontendData(data.data),
    meta: {
      platforms: data.meta.platforms.map((platformName) => ({
        name: platformName,
        icon: getCompanyLogoByName(platformName),
      })),
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
