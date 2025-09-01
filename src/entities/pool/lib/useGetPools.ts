import { useQuery } from '@tanstack/react-query';

import { PoolsControllerGetPoolItemsParams } from 'shared/api/generated/Api';
import { QueryKeys } from 'shared/config';

import { getPools } from '../api';
import { PoolItem } from '../types';

export const useGetPools = (
  params: PoolsControllerGetPoolItemsParams,
  initialData?: PoolItem[],
) => {
  return useQuery({
    queryKey: [QueryKeys.Pools, params],
    queryFn: async () => getPools(params),
    retry: false,
    placeholderData: (prev = initialData) => prev,
  });
};
