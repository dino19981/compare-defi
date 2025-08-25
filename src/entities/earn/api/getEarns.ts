import { axiosInstance } from 'shared/api';
import { EarnControllerGetEarnItemsParams, EarnResponseDto } from 'shared/api/generated/Api';
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
  return earns.map((earn) => ({
    ...earn,
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
