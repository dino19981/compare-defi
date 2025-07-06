import { getTokenLogoByTokenName } from 'shared/lib/earn';
import { EarnItem, EarnItemLevel } from 'shared/model/earn';
import { isAvailableTokenForEarnings } from 'src/shared/lib/earnings';
import { v4 as uuid } from 'uuid';

import logoSrc from '../assets/kucoin.svg';
import { OkxEarnDto } from '../model';
import { BingXService } from './bingXService';

export const getBingXEarnings = async () => {
  try {
    const { data } = await BingXService.getEarnings();

    return mapToFrontendData(data.allProducts.currencies);
  } catch (e: any) {
    console.log(e?.status, 'BingXService error');

    return [];
  }
};

function mapToFrontendData(items: OkxEarnDto[]) {
  return items.reduce((acc: EarnItem[], item) => {
    if (!isAvailableTokenForEarnings(item.investCurrency.currencyName)) {
      return acc;
    }

    const logo = getTokenLogoByTokenName(item.investCurrency.currencyName);

    acc.push({
      id: uuid(),
      token: {
        name: item.investCurrency.currencyName,
        icon: logo,
      },
      periodType: 'flexible',
      platform: {
        link: 'https://okx.com/join/41728095',
        name: 'Okx',
        icon: logoSrc,
      },
      rates: [
        {
          currentApy: +item.rate.rateNum.value[0],
          rateLevel: 0,
        },
      ],
      productLevel: EarnItemLevel.Beginner,
    });

    return acc;
  }, []);
}
