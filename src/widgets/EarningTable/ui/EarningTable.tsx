'use client';

import { useMemo, useState } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

// import Table from '@mui/material/Table';

import { EarnItem } from 'shared/model/earn';
import { Table, TableCellProps, TablePagination } from 'shared/ui/Table';
import { useTableSort } from 'shared/ui/Table/lib';

import { formatBodyData, getVisibleRowsByPage } from '../lib';

interface Props {
    data: EarnItem[];
    pages: number;
}

export const EarningTable = ({ data, pages }: Props) => {
    const { sortedData, onChangeSort } = useTableSort(data);
    const [page, setPage] = useState(0);

    const bodyRows = useMemo(() => getVisibleRowsByPage(sortedData, data.length, page).map(formatBodyData), [sortedData, page]);

    // const emptyRows = page > 0 ? Math.max(0, (1 + page) * ROWS_PER_PAGE - rows.length) : 0;

    const headCells = useMemo<TableCellProps[]>(
        () => [
            { children: 'Монета', key: 1, align: 'center' },
            { children: 'APR/APY', key: 2, align: 'center' },
            { children: 'Платформа', key: 4, align: 'center' },
            { children: '', key: 5, size: 'small' },
        ],
        [],
    );

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <Table headCells={headCells} bodyRows={bodyRows} />
                <TablePagination count={pages} page={page + 1} onChange={(_, page) => setPage(page - 1)} />
            </Paper>
        </Box>
    );
};
