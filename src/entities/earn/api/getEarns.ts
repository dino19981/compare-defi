import { axiosInstance } from 'shared/api';
import { EarnControllerGetEarnItemsParams, EarnResponseDto } from 'shared/api/generated/Api';
import { formatPercentage } from 'shared/lib';
import { getCompanyLogoByName } from 'shared/lib/getCompanyLogoByName';
import { getTokenLogoByName } from 'shared/lib/getTokenLogoByName';

import { EarnItem } from '../types';

export const getEarns = async (params?: EarnControllerGetEarnItemsParams) => {
  // const { data } = await axiosInstance.get<EarnResponseDto>('/earn/without-job');
  const { data } = await axiosInstance.get<EarnResponseDto>('/earn', {
    params,
  });

  const flattedEarns = data.data.flat();

  return {
    data: mapToFrontendData(flattedEarns),
  };
};

function mapToFrontendData(earns: EarnResponseDto['data']): EarnItem[] {
  console.log(earns[0].maxRate, formatPercentage(earns[0].maxRate), 'earnsearnsearns');

  return earns.map((earn) => ({
    ...earn,
    maxRate: formatPercentage(earn.maxRate) ?? 'not defined',
    token: {
      name: earn.token.name,
      icon: getTokenLogoByName(earn.token.name),
    },
    platform: {
      name: earn.platform.name,
      link: earn.platform.link,
      refLink: earn.platform.refLink,
      icon: getCompanyLogoByName(earn.platform.name),
    },
  }));
}
