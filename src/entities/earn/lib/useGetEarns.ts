import { useQuery } from '@tanstack/react-query';

import { EarnControllerGetEarnItemsParams } from 'shared/api/generated/Api';
import { QueryKeys } from 'shared/config';

import { getEarns } from '../api';
import { EarnItem } from '../types';

export const useGetEarns = (
  defaultValues: EarnItem[],
  params: EarnControllerGetEarnItemsParams,
) => {
  return useQuery({
    queryKey: [QueryKeys.Earn, params],
    queryFn: async () => getEarns(params),
    retry: false,
    // placeholderData: {
    //   data: defaultValues,
    // },
    // initialData: {
    //   data: defaultValues,
    // },
  });
};
