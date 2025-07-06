import { getTokenLogoByTokenName } from 'shared/lib/earn';
import { EarnItem, EarnItemLevel } from 'shared/model/earn';
import { isAvailableTokenForEarnings } from 'src/shared/lib/earnings';

import logoSrc from '../assets/bitget.svg';
import { BitgetEarnDto, BitgetEarnFrontendDto } from '../model/bitgetEarnDto';
import { BitgetService } from './bitgetService';

export const getBitgetEarnings = async () => {
  try {
    const { data } = await BitgetService.getEarnings();

    return mapToFrontendData(data);
  } catch {
    console.log('Cant load earn from BitgetService');

    return [];
  }
};

function mapToFrontendData(items: BitgetEarnDto[]) {
  return items.reduce((acc: EarnItem[], item) => {
    if (!isAvailableTokenForEarnings(item.coin)) {
      return acc;
    }

    const logo = getTokenLogoByTokenName(item.coin);

    acc.push({
      id: item.productId,
      token: {
        name: item.coin,
        icon: logo,
      },
      periodType: item.periodType,
      platform: {
        link: 'https://share.bitget.com/u/G2556G9Q',
        name: 'Bitget',
        icon: logoSrc,
      },
      rates: item.apyList.map((item) => ({
        currentApy: +item.currentApy,
        rateLevel: +item.rateLevel,
      })),
      productLevel: item.productLevel as never as EarnItemLevel,
    });

    return acc;
  }, []);
}
