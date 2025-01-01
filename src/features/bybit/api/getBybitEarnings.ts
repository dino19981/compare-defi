import { getTokenLogoByTokenName } from 'shared/lib/earn';
import { EarnItem } from 'shared/model/earn';
import { isAvailableTokenForEarnings } from 'src/shared/lib/earnings';

import logoSrc from '../assets/bybit.svg';
import { BitgetEarnDto } from '../model/bitgetEarnDto';
import { BybitService } from './bybitService';

export const getBybitEarnings = async () => {
    try {
        const { data } = await BybitService.getEarnings();

        return mapToFrontendData(data);
    } catch {
        return [];
    }
};

function mapToFrontendData(items: BitgetEarnDto[]) {
    // // return items.reduce((acc: EarnItem[], item) => {
    // if (!isAvailableTokenForEarnings(item.coin)) {
    //     return acc;
    // }

    // const logo = getTokenLogoByTokenName(item.coin);

    // acc.push({
    //     id: item.productId,
    //     name: item.coin,
    //     periodType: item.periodType,
    //     platform: {
    //         link: 'https://www.bitget.com/ru/earning/savings?source1=earn&source2=savings',
    //         name: 'Bybit',
    //         icon: logoSrc,
    //     },
    //     rates: item.apyList,
    //     productLevel: item.productLevel,
    // });
    // acc.push({
    //     id: item.productId,
    //     token: {
    //         name: item.coin,
    //         icon: logo,
    //     },
    //     periodType: item.periodType,
    //     platform: {
    //         link: 'https://share.bitget.com/u/G2556G9Q',
    //         name: 'Bitget',
    //         icon: logoSrc,
    //     },
    //     rates: item.apyList.map((item) => ({
    //         currentApy: +item.currentApy,
    //         rateLevel: +item.rateLevel,
    //     })),
    //     productLevel: item.productLevel as never as EarnItemLevel,
    // });

    // return acc;
    // // }, []);

    return [] as EarnItem[];
}
