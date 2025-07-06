'use client';

import { useMemo, useState } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { EarnItem } from 'shared/model/earn';
import { Table, TableCellProps, TablePagination } from 'shared/ui/Table';
import { useTableSort } from 'shared/ui/Table/lib';

import { formatBodyData, getSortKey, getTableHeaderCells, getVisibleRowsByPage } from '../lib';
import { getUniswapApy, sendMessage } from '../lib/sendMessage';

interface Props {
    data: EarnItem[];
    pages: number;
}

export const EarningTable = ({ data, pages }: Props) => {
    const { sortedData, order, orderBy, onChangeSort } = useTableSort({
        data,
        defaultOrderBy: 'rates',
        getSortKey,
    });
    const [page, setPage] = useState(0);

    const bodyRows = useMemo(() => getVisibleRowsByPage(sortedData, data.length, page).map(formatBodyData), [sortedData, page]);
    const headCells = useMemo<TableCellProps[]>(() => getTableHeaderCells(order, orderBy, onChangeSort), [order, orderBy, onChangeSort]);

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                {/* <button onClick={sendMessage}>ewqe</button> */}

                <Table headCells={headCells} bodyRows={bodyRows} />
                <TablePagination count={pages} page={page + 1} onChange={(_, page) => setPage(page - 1)} />
            </Paper>
        </Box>
    );
};
