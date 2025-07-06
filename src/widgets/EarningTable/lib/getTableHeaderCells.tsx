import { TableSortLabel } from '@mui/material';

import { SortOrder } from 'shared/model/SortOrder';
import { EarnItem } from 'shared/model/earn';
import { TableCellProps } from 'shared/ui/Table';

export const getTableHeaderCells = (
    order: SortOrder,
    orderBy: string | undefined,
    onChange: (_: React.MouseEvent<unknown>, property: string) => void,
): TableCellProps[] => {
    return [
        {
            children: (
                <TableSortLabel
                    active={orderBy === 'token'}
                    direction={orderBy === 'token' ? getTableSortOrder(order) : 'asc'}
                    onClick={(e) => onChange(e, 'token')}
                >
                    Монета
                </TableSortLabel>
            ),
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
                    APR/APY
                </TableSortLabel>
            ),
            key: 2,
            align: 'center',
        },
        {
            children: (
                <TableSortLabel
                    active={orderBy === 'platform'}
                    direction={orderBy === 'platform' ? getTableSortOrder(order) : 'asc'}
                    onClick={(e) => onChange(e, 'platform')}
                >
                    Платформа
                </TableSortLabel>
            ),
            key: 4,
            align: 'center',
        },
        { children: '', key: 5, size: 'small' },
    ];
};

function getTableSortOrder(order: SortOrder) {
    return order === SortOrder.Desc ? 'desc' : 'asc';
}
