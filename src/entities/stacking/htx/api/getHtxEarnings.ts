import { getTokenLogoByTokenName } from 'shared/lib/earn';
import { EarnItem, EarnItemLevel } from 'shared/model/earn';
import { isAvailableTokenForEarnings } from 'src/shared/lib/earnings';
import { v4 as uuid } from 'uuid';

import logoSrc from '../assets/htx.svg';
import { HtxEarnDto } from '../model';
import { HtxService } from './htxService';

export const getHtxEarnings = async () => {
  try {
    const { data } = await HtxService.getEarnings();

    return mapToFrontendData(data.recommendProject);
  } catch (e: any) {
    console.log(e?.status, 'Cant load earn from  HtxService');

    return [];
  }
};

function mapToFrontendData(items: HtxEarnDto[]) {
  return items.reduce((acc: EarnItem[], item) => {
    if (!isAvailableTokenForEarnings(item.currency)) {
      return acc;
    }

    const logo = getTokenLogoByTokenName(item.currency);

    item.projectList.forEach((product) => {
      acc.push({
        id: uuid(),
        token: {
          name: item.currency,
          icon: logo,
        },
        periodType: 'flexible',
        platform: {
          link: 'https://www.htx.com/invite/en-us/1f?invite_code=8czja223',
          name: 'Htx',
          icon: logoSrc,
        },
        rates: [
          {
            // возвращается процент деленный на 100
            currentApy: product.viewYearRate * 100,
            rateLevel: 0,
          },
        ],
        productLevel: EarnItemLevel.Beginner,
      });
    });

    return acc;
  }, []);
}
