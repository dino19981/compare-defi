'use client';

import { useMemo } from 'react';

import { POOL_ITEMS_DEFAULT_LIMIT } from 'entities/pool/constants/pagination';
import { PoolItem } from 'entities/pool/types';
import { useTranslations } from 'next-intl';
import { BaseFiltersV2 } from 'shared/lib';
import { Table, TableCellProps, TableRowPlaceholder } from 'shared/ui/Table';

import { formatBodyData, getTableHeaderCells } from '../lib';

interface Props {
  data: PoolItem[];
  baseFilters: BaseFiltersV2<PoolItem>;
  isLoadingMore: boolean;
}

export const PoolsTable = ({ data, baseFilters, isLoadingMore }: Props) => {
  const t = useTranslations('pools');

  const { order, orderBy, onChangeSort } = baseFilters;

  const bodyRows = useMemo(() => data.map((item) => formatBodyData(item, t)), [data, t]);
  const headCells = useMemo<TableCellProps[]>(
    () => getTableHeaderCells(order, orderBy, onChangeSort, t),
    [order, orderBy, onChangeSort, t],
  );

  return (
    <div>
      <Table headCells={headCells} bodyRows={bodyRows} />

      {isLoadingMore &&
        Array.from({ length: POOL_ITEMS_DEFAULT_LIMIT }, (_, index) => (
          <TableRowPlaceholder key={index} />
        ))}
    </div>
  );
};
