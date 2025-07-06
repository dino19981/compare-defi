import { getTokenLogoByTokenName } from 'shared/lib/earn';
import { EarnItem, EarnItemLevel } from 'shared/model/earn';
import { isAvailableTokenForEarnings } from 'src/shared/lib/earnings';

import logoSrc from '../assets/binance.svg';
import { BinanceEarnDto, BinanceProductSummaryType } from '../model';
import { BinanceService } from './binanceService';

export const getBinanceEarnings = async () => {
  try {
    const { data } = await BinanceService.getEarnings();

    return mapToFrontendData(data.list);
  } catch (e: any) {
    console.log(e?.status, 'Cant load earn from  BinanceService');

    return [];
  }
};

function mapToFrontendData(items: BinanceEarnDto[]) {
  return items.reduce((acc: EarnItem[], item) => {
    if (!isAvailableTokenForEarnings(item.asset)) {
      return acc;
    }

    const simpleEarnData = item.productSummary.find(
      (item) => item.productType === BinanceProductSummaryType.SimpleEarn,
    );

    if (!simpleEarnData) {
      return acc;
    }

    const logo = getTokenLogoByTokenName(item.asset);

    acc.push({
      id: simpleEarnData.productId,
      token: {
        name: item.asset,
        icon: logo,
      },
      periodType: 'flexible',
      platform: {
        link: 'https://www.binance.com/activity/referral-entry/CPA?ref=CPA_00CR5Q0KBD',
        name: 'Binance',
        icon: logoSrc,
      },
      rates: [
        {
          // todo: binance возвращает apr в процентах, поэтому умножаем на 100
          currentApy: +simpleEarnData.maxApr * 100,
          rateLevel: 0,
        },
      ],
      productLevel: EarnItemLevel.Beginner,
    });

    return acc;
  }, []);
}
