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
      children: <>{t('columns.token')}</>,
      key: 'token',
      align: 'center',
    },
    {
      children: (
        <TableSortLabel
          active={orderBy === 'maxRate' && !!order}
          direction={order}
          onClick={(e) => onChange(e, 'maxRate')}
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
