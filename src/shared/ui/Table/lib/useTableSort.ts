import { useCallback, useMemo, useState } from 'react';

import { sortArray } from 'shared/lib/array';
import { NestedKeys } from 'shared/model';
import { SortOrder } from 'shared/model/SortOrder';

import { filterData } from './filterData';

type FilterKeys<T> = keyof T | NestedKeys<T>;

interface Props<T extends object> {
  data: T[];
  defaultOrderBy?: string;

  defaultPage?: number;
  defaultPerPage: number;

  getSortKey?: (orderBy: string) => (a: unknown) => string | number;
}

export const useTableSort = <T extends object>({
  data,
  defaultOrderBy,
  getSortKey,
  defaultPage = 0,
  defaultPerPage,
}: Props<T>) => {
  const [order, setOrder] = useState<SortOrder>(SortOrder.Desc);
  const [orderBy, setOrderBy] = useState<string | undefined>(defaultOrderBy);

  const [page, setPage] = useState<number>(defaultPage);
  const [perPage, setPerPage] = useState<number>(defaultPerPage);

  const [filters, setFilters] = useState<Partial<Record<FilterKeys<T>, string[]>>>({});

  const { sortedData, pages } = useMemo(() => {
    const filteredData = filterData(data, filters);

    const pages = Math.ceil(filteredData.length / perPage);

    if (!orderBy) {
      return {
        sortedData: filteredData,
        pages,
      };
    }

    const _orderBy = getSortKey ? undefined : orderBy;

    return {
      sortedData: sortArray(filteredData, order, _orderBy, getSortKey?.(orderBy)),
      pages,
    };
  }, [order, orderBy, data, filters, perPage]);

  const onChangePerPage = useCallback((perPage: number) => {
    setPerPage(perPage);
    setPage(0);
  }, []);

  const onChangeSort = useCallback((_: React.MouseEvent<unknown>, property: string) => {
    const isAsc = orderBy === property && order === SortOrder.Asc;
    setOrder(isAsc ? SortOrder.Desc : SortOrder.Asc);
    setOrderBy(property);
  }, []);

  return {
    order,
    orderBy,
    sortedData,
    filters,
    pages,
    perPage,
    page,
    setOrder,
    setOrderBy,
    onChangeSort,
    setFilters,
    setPage,
    setPerPage: onChangePerPage,
  };
};
