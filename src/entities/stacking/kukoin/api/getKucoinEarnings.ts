import { getTokenLogoByTokenName } from 'shared/lib/earn';
import { EarnItem, EarnItemLevel } from 'shared/model/earn';
import { isAvailableTokenForEarnings } from 'src/shared/lib/earnings';
import { v4 as uuid } from 'uuid';

import logoSrc from '../assets/kucoin.svg';
import { KucoinEarnDto } from '../model';
import { KucoinService } from './kucoinService';

export const getKucoinEarnings = async () => {
  try {
    const { data } = await KucoinService.getEarnings();

    return mapToFrontendData(data);
  } catch (e: any) {
    console.log(e?.status, 'Cant load earn from  KucoinService');

    return [];
  }
};

function mapToFrontendData(items: KucoinEarnDto[]) {
  return items.reduce((acc: EarnItem[], item) => {
    if (!isAvailableTokenForEarnings(item.currency)) {
      return acc;
    }

    const logo = getTokenLogoByTokenName(item.currency);

    item.products.forEach((product) => {
      acc.push({
        id: uuid(),
        token: {
          name: item.currency,
          icon: logo,
        },
        periodType: 'flexible',
        platform: {
          link: 'https://www.kucoin.com/r/rf/A1LX17VF',
          name: 'Kucoin',
          icon: logoSrc,
        },
        rates: [
          {
            currentApy: product.apr ? +product.apr : +product.total_apr,
            rateLevel: 0,
          },
        ],
        productLevel: EarnItemLevel.Beginner,
      });
    });

    return acc;
  }, []);
}
