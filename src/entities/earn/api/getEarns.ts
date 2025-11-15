import { axiosInstance } from 'shared/api';
import {
  EarnControllerGetEarnItemsParams,
  EarnItemPlatformDtoNameEnum,
  EarnResponseDto,
} from 'shared/api/generated/Api';
import { formatPercentage } from 'shared/lib';
import { CACHE_CONFIG } from 'shared/lib/cache';
import { getCompanyLogoByName } from 'shared/lib/getCompanyLogoByName';

import { EarnItem, GetEarnsResponse } from '../types';

export const getEarns = async (
  params?: EarnControllerGetEarnItemsParams,
): Promise<GetEarnsResponse> => {
  console.log(params, 'getEarnsgetEarnsgetEarns');
  // const { data } = await axiosInstance.get<EarnResponseDto>('/earn/without-job');
  const { data } = await axiosInstance.get<EarnResponseDto>('/earn', {
    params,
    headers: CACHE_CONFIG.STATIC.headers,
  });

  const flattedEarns = data.data.flat();

  return {
    data: mapToFrontendData(flattedEarns),
    meta: {
      platforms: data.meta.platforms.map((platformName) => ({
        name: platformName as EarnItemPlatformDtoNameEnum,
        icon: getCompanyLogoByName(platformName),
      })),
      tokens: data.meta.tokens,
    },
    pagination: data.pagination,
  };
};

function mapToFrontendData(earns: EarnResponseDto['data']): EarnItem[] {
  return earns.map((earn) => ({
    ...earn,
    maxRate: formatPercentage(earn.maxRate) ?? 'not defined',
    token: earn.token,
    platform: {
      name: earn.platform.name,
      link: earn.platform.link,
      refLink: earn.platform.refLink,
      icon: getCompanyLogoByName(earn.platform.name),
    },
  }));
}
