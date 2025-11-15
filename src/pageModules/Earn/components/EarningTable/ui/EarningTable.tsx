'use client';

import { useMemo } from 'react';

import { EarnItem } from 'entities/earn';
import { EARN_ITEMS_DEFAULT_LIMIT } from 'entities/earn/constants/pagination';
import { useTranslations } from 'next-intl';
import { BaseFiltersV2 } from 'shared/lib';
import { Table, TableCellProps, TableRowPlaceholder } from 'shared/ui/Table';

import { formatBodyData, getTableHeaderCells } from '../lib';

interface Props {
  data: EarnItem[];
  baseFilters: BaseFiltersV2<EarnItem>;

  isLoadingMore: boolean;
}

export const EarningTable = ({ data, baseFilters, isLoadingMore }: Props) => {
  const t = useTranslations('earn');

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
        Array.from({ length: EARN_ITEMS_DEFAULT_LIMIT }, (_, index) => (
          <TableRowPlaceholder key={index} />
        ))}
    </div>
  );
};
