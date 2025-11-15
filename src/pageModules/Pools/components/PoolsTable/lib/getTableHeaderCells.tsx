import { TableSortLabel } from '@mui/material';

import { SortDirectionEnum } from 'shared/api/generated/Api';
import { TableCellProps } from 'shared/ui/Table';

export const getTableHeaderCells = (
  order: SortDirectionEnum | undefined,
  orderBy: string | undefined,
  onChange: (_: React.MouseEvent<unknown>, property: string) => void,
  t: (key: string, values?: { count?: number }) => string,
): TableCellProps[] => {
  return [
    {
      children: <>{t('features.token')}</>,
      key: 'token',
      align: 'center',
    },
    {
      children: (
        <TableSortLabel
          active={orderBy === 'apr' && !!order}
          direction={order}
          onClick={(e) => onChange(e, 'apr')}
        >
          {t('features.apr')}
        </TableSortLabel>
      ),
      key: 'apr',
      align: 'center',
    },
    { children: t('features.fee'), key: 'fee', align: 'center' },
    { children: t('features.tvl'), key: 'tvl', align: 'center' },
    {
      children: <>{t('features.platform')}</>,
      key: 'platform',
      align: 'center',
    },
    {
      children: <>{t('features.chain')}</>,
      key: 'chain',
      align: 'center',
    },
    { children: '', key: 'actions', size: 'small' },
  ];
};
