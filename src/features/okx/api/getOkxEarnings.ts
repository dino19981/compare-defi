import { getTokenLogoByTokenName } from 'shared/lib/earn';
import { EarnItem, EarnItemLevel } from 'shared/model/earn';
import { isAvailableTokenForEarnings } from 'src/shared/lib/earnings';

import logoSrc from '../assets/okx.png';
import { OkxEarnDto } from '../model';
import { OkxService } from './okxService';

export const getOkxEarnings = async () => {
    try {
        const { data } = await OkxService.getEarnings();
        console.log(data, 'dataa');

        return mapToFrontendData(data);
    } catch (e) {
        console.log(e, 'eqweqweqw');

        return [];
    }
};

function mapToFrontendData(items: OkxEarnDto[]) {
    return items.reduce((acc: EarnItem[], item) => {
        if (!isAvailableTokenForEarnings(item.ccy)) {
            return acc;
        }

        const logo = getTokenLogoByTokenName(item.ccy);

        acc.push({
            id: item.productId,
            token: {
                name: item.ccy,
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
                    currentApy: +item.apy,
                    rateLevel: 0,
                },
            ],
            productLevel: EarnItemLevel.Beginner,
        });

        return acc;
    }, []);
}
