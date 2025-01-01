import { isAvailableTokenForEarnings } from 'src/shared/lib/earnings';

import { BitgetEarnDto, BitgetEarnFrontendDto } from '../model/bitgetEarnDto';
import { BybitService } from './bybitService';

export const getBybitEarnings = async () => {
    try {
        const { data } = await BybitService.getEarnings();

        return data;
        // mapToFrontendData(data);
    } catch {
        return [];
    }
};

function mapToFrontendData(items: BitgetEarnDto[]) {
    return items.reduce((acc: BitgetEarnFrontendDto[], item) => {
        if (!isAvailableTokenForEarnings(item.coin)) {
            return acc;
        }

        acc.push({
            id: item.productId,
            name: item.coin,
            periodType: item.periodType,
            platform: 'https://www.bitget.com/ru/earning/savings?source1=earn&source2=savings',
            rates: item.apyList,
            productLevel: item.productLevel,
        });

        return acc;
    }, []);
}
