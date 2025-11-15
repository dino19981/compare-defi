import { useQuery } from '@tanstack/react-query';

import { PoolsControllerGetPoolItemsParams } from 'shared/api/generated/Api';
import { QueryKeys } from 'shared/config';

import { GetPoolsResponse, getPools } from '../api';

export const useGetPools = (
  params: PoolsControllerGetPoolItemsParams,
  initialData?: GetPoolsResponse,
) => {
  return useQuery({
    queryKey: [QueryKeys.Pools, params],
    queryFn: async () => getPools(params),
    retry: false,
    placeholderData: (prev = initialData) => prev,
  });
};
