import { useQuery } from '@tanstack/react-query';

import { EarnControllerGetEarnItemsParams } from 'shared/api/generated/Api';
import { QueryKeys } from 'shared/config';

import { getEarns } from '../api';
import { GetEarnsResponse } from '../types';

export const useGetEarns = (
  defaultValues: GetEarnsResponse,
  params: EarnControllerGetEarnItemsParams,
) => {
  return useQuery({
    queryKey: [QueryKeys.Earn, params],
    queryFn: async () => getEarns(params),
    retry: false,
    placeholderData: (previousData = defaultValues) => previousData,
  });
};
