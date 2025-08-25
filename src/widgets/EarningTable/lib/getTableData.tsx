import { Link, Stack } from '@mui/material';

import { DurationCellContent, EarnItem, RatesSettingsTooltip } from 'entities/earn';
import { formatPercentage } from 'shared/lib/formatter';
import { LogoWithName } from 'shared/ui/LogoWithName';
import { TableCellProps } from 'shared/ui/Table';
import { v4 as uuid } from 'uuid';

const emptyRow = [
  {
    children: <Stack style={{ padding: '10px' }} />,
    key: uuid(),
  },
  {
    children: <Stack style={{ padding: '10px' }} />,
    key: uuid(),
  },
  {
    children: <Stack style={{ padding: '10px' }} />,
    key: uuid(),
  },
  {
    children: <Stack style={{ padding: '10px' }} />,
    key: uuid(),
  },
  {
    children: <Stack style={{ padding: '10px' }} />,
    key: uuid(),
  },
];

export const formatBodyData = (
  data: EarnItem | undefined,
  t: (key: string, values?: { count?: number }) => string,
): TableCellProps[] => {
  if (!data) {
    return emptyRow;
  }

  const rates = formatPercentage(data.maxRate);
  // const rates = data?.rateSettings?.length
  //   ? getMinAndMaxRate(data.rateSettings)
  //   : formatPercentage(data.maxRate);

  return [
    {
      children: (
        <LogoWithName
          containerProps={{ sx: { justifyContent: 'flex-start', margin: '0 auto', width: '67px' } }}
          name={data.token.name}
          logo={data.token.icon}
        />
      ),
      key: 'token',
      align: 'center',
    },
    {
      children: (
        <>
          {rates}
          {!!data?.rateSettings?.length && (
            <RatesSettingsTooltip ratesSettings={data.rateSettings} token={data.token} />
          )}
          {/* {data.badges?.includes(EarnItemDtoBadgesEnum.ForNewUsers) && <ForNewUserTooltip />} */}
        </>
      ),
      key: 'rates',
      align: 'center',
    },
    {
      children: <DurationCellContent duration={data.duration} />,
      key: 'duration',
      align: 'center',
    },
    {
      children: (
        <LogoWithName
          containerProps={{ sx: { justifyContent: 'flex-start', margin: '0 auto', width: '67px' } }}
          name={data.platform.name}
          logo={data.platform.icon}
        />
      ),
      align: 'center',
      key: 'platform',
    },
    {
      children: (
        <Link target="_blank" href={data.platform.link}>
          {t('actions.goTo')}
        </Link>
      ),
      key: 'action',
      align: 'center',
    },
  ];
};

// function getMinAndMaxRate(rates: EarnItemRateSettings[]) {
//   const [min, max] = findMinMax(rates, 'apy');

//   if (isDefined(min) && isDefined(max)) {
//     return `${formatPercentage(min)} - ${formatPercentage(max)}`;
//   }

//   if (isDefined(min)) {
//     return formatPercentage(min);
//   }

//   if (isDefined(max)) {
//     return formatPercentage(max);
//   }

//   return '-';
// }
