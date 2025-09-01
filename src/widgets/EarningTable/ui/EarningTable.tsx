'use client';

import { useMemo } from 'react';

import { Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { EarnItem } from 'entities/earn';
import { useGetEarns } from 'entities/earn/lib';
import { useTranslations } from 'next-intl';
import { Table, TableCellProps, TablePagination } from 'shared/ui/Table';
import { useTableSort } from 'shared/ui/Table/lib';

import { formatBodyData, getTableHeaderCells, getVisibleRowsByPage } from '../lib';
import { EarningTablePlatformsFilter, EarningTableTokensFilter } from './components';

interface Props {
  data: EarnItem[];
}

export const EarningTable = ({ data }: Props) => {
  const t = useTranslations('earn.table');

  const {
    order,
    orderBy,
    page,
    perPage,
    sort,
    filters,
    onChangeSort,
    setFilters,
    setPage,
    setPerPage,
  } = useTableSort({
    defaultOrderBy: 'maxRate',
    defaultPerPage: 10,
  });

  const { data: earns } = useGetEarns(data, {
    sort,
    filter: filters,
  });

  const items = earns?.data || data;

  const pages = Math.ceil(items.length / perPage);

  const bodyRows = useMemo(
    () =>
      getVisibleRowsByPage(items, data.length, page, perPage).map((item) =>
        formatBodyData(item, t),
      ),
    [items, page, t, perPage],
  );
  const headCells = useMemo<TableCellProps[]>(
    () => getTableHeaderCells(order, orderBy, onChangeSort, t),
    [order, orderBy, onChangeSort, t],
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <Toolbar>
          <EarningTableTokensFilter
            data={data}
            onChange={(value) => setFilters((prev) => ({ ...prev, tokenName: value }))}
          />
          <EarningTablePlatformsFilter
            data={data}
            onChange={(value) => setFilters((prev) => ({ ...prev, platformName: value }))}
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
