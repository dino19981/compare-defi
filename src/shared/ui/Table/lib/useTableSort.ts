'use client';

import { useCallback, useState } from 'react';

import { SortDirectionEnum } from 'shared/api/generated/Api';
import { NestedKeys } from 'shared/model';

type FilterKeys<T> = keyof T | NestedKeys<T>;

interface Props {
  defaultOrderBy?: string;

  defaultPage?: number;
  defaultPerPage: number;
}

export const useTableSort = <T extends object>({
  defaultOrderBy,
  defaultPage = 0,
  defaultPerPage,
}: Props) => {
  const [order, setOrder] = useState<SortDirectionEnum | undefined>(SortDirectionEnum.Desc);
  const [orderBy, setOrderBy] = useState<string | undefined>(defaultOrderBy);

  const [page, setPage] = useState<number>(defaultPage);
  const [perPage, setPerPage] = useState<number>(defaultPerPage);

  const [filters, setFilters] = useState<Partial<Record<FilterKeys<T>, string[]>>>({});

  const onChangePerPage = useCallback((perPage: number) => {
    setPerPage(perPage);
    setPage(0);
  }, []);

  const onChangeSort = useCallback(
    (_: React.MouseEvent<unknown>, property: string) => {
      // const isAsc = orderBy === property && order === SortDirectionEnum.Asc;

      const sortByPrevSort = {
        [SortDirectionEnum.Asc]: SortDirectionEnum.Desc,
        [SortDirectionEnum.Desc]: undefined,
      };

      setOrder(order ? sortByPrevSort[order] : SortDirectionEnum.Asc);
      setOrderBy(property);
    },
    [order],
  );

  return {
    order,
    orderBy,
    filters,
    perPage,
    page,
    sort: order
      ? {
          field: orderBy!,
          direction: order!,
        }
      : undefined,
    setOrder,
    setOrderBy,
    onChangeSort,
    setFilters,
    setPage,
    setPerPage: onChangePerPage,
  };
};
