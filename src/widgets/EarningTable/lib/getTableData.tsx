import { Link } from '@mui/material';

import { formatPercentage } from 'shared/lib/formatter';
import { isDefined } from 'shared/lib/is-defined';
import { findMinMax } from 'shared/lib/number';
import { EarnItem, EarnItemRate } from 'shared/model/earn';
import { LogoWithName } from 'shared/ui/LogoWithName';
import { TableCellProps } from 'shared/ui/Table';

export const formatBodyData = (data: EarnItem): TableCellProps[] => {
    const isRatesMoreThanOne = data.rates.length > 1;
    const rates = isRatesMoreThanOne ? getMinAndMaxRate(data.rates) : formatPercentage(data.rates[0].currentApy);

    return [
        {
            children: <LogoWithName containerProps={{ sx: { justifyContent: 'center' } }} name={data.token.name} logo={data.token.icon} />,
            key: 'token',
            align: 'center',
        },
        { children: rates, key: 'rates', align: 'center' },
        {
            children: (
                <LogoWithName containerProps={{ sx: { justifyContent: 'center' } }} name={data.platform.name} logo={data.platform.icon} />
            ),
            align: 'center',
            key: 'platform',
        },
        {
            children: (
                <Link target="_blank" href={data.platform.link}>
                    Перейти
                </Link>
            ),
            key: 'action',
            align: 'center',
        },
    ];
};

function getMinAndMaxRate(rates: EarnItemRate[]) {
    const [min, max] = findMinMax(rates, 'currentApy');

    if (isDefined(min) && isDefined(max)) {
        return `${formatPercentage(min)} - ${formatPercentage(max)}`;
    }

    if (isDefined(min)) {
        return formatPercentage(min);
    }

    if (isDefined(max)) {
        return formatPercentage(max);
    }

    return '-';
}
