'use client';

import { useMemo } from 'react';

import { Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { EarnItem } from 'entities/earn';
import { useTranslations } from 'next-intl';
import { Table, TableCellProps, TablePagination } from 'shared/ui/Table';
import { useTableSort } from 'shared/ui/Table/lib';

import { formatBodyData, getSortKey, getTableHeaderCells, getVisibleRowsByPage } from '../lib';
import { EarningTableTokensFilter } from './components';
import { EarningTablePlatformsFilter } from './components/EarningTablePlatformsFilter/EarningTablePlatformsFilter';

interface Props {
  data: EarnItem[];
}

export const EarningTable = ({ data }: Props) => {
  const t = useTranslations('earn.table');

  const {
    sortedData,
    order,
    orderBy,
    pages,
    page,
    perPage,
    onChangeSort,
    setFilters,
    setPage,
    setPerPage,
  } = useTableSort({
    data,
    defaultOrderBy: 'rates',
    getSortKey,
    defaultPerPage: 10,
  });

  const bodyRows = useMemo(
    () =>
      getVisibleRowsByPage(sortedData, data.length, page, perPage).map((item) =>
        formatBodyData(item, t),
      ),
    [sortedData, page, t, perPage],
  );
  const headCells = useMemo<TableCellProps[]>(
    () => getTableHeaderCells(order, orderBy, onChangeSort, t),
    [order, orderBy, onChangeSort, t],
  );

  console.log(sortedData, page, 'sortedDatasortedDatasortedData');

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <Toolbar>
          <EarningTableTokensFilter
            data={data}
            onChange={(value) => setFilters((prev) => ({ ...prev, 'token.name': value }))}
          />
          <EarningTablePlatformsFilter
            data={data}
            onChange={(value) => setFilters((prev) => ({ ...prev, 'platform.name': value }))}
          />
        </Toolbar>
        {/* <button onClick={sendMessage}>ewqe</button> */}

        <Table headCells={headCells} bodyRows={bodyRows} />
        <TablePagination
          count={pages}
          page={page + 1}
          onChange={(_, page) => setPage(page - 1)}
          rowsPerPage={perPage}
          onRowsPerPageChange={setPerPage}
        />
      </Paper>
    </Box>
  );
};
