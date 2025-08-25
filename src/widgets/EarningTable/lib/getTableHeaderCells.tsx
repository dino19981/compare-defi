import { TableSortLabel } from '@mui/material';

import { SortOrder } from 'shared/model/SortOrder';
import { TableCellProps } from 'shared/ui/Table';

export const getTableHeaderCells = (
  order: SortOrder,
  orderBy: string | undefined,
  onChange: (_: React.MouseEvent<unknown>, property: string) => void,
  t: (key: string, values?: { count?: number }) => string,
): TableCellProps[] => {
  return [
    {
      children: <>{t('columns.token')}</>,
      key: 'token',
      align: 'center',
    },
    {
      children: (
        <TableSortLabel
          active={orderBy === 'rates'}
          direction={orderBy === 'rates' ? getTableSortOrder(order) : 'asc'}
          onClick={(e) => onChange(e, 'rates')}
        >
          {t('columns.apy')}
        </TableSortLabel>
      ),
      key: 'apy',
      align: 'center',
    },
    { children: t('columns.duration'), key: 'duration', align: 'center' },
    {
      children: <>{t('columns.platform')}</>,
      key: 'platform',
      align: 'center',
    },
    { children: '', key: 'actions', size: 'small' },
  ];
};

function getTableSortOrder(order: SortOrder) {
  return order === SortOrder.Desc ? 'desc' : 'asc';
}
