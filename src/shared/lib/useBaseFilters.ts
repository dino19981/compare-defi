'use client';

import { Dispatch, SetStateAction, useCallback, useState } from 'react';

import { SortDirectionEnum } from 'shared/api/generated/Api';
import { NestedKeys } from 'shared/model';

const DEFAULT_SKIP = 0;

type FilterKeys<T> = keyof T | NestedKeys<T>;

export interface BaseFilters<T extends object> {
  skip: number;
  order: SortDirectionEnum | undefined;
  orderBy: string | undefined;
  page: number;
  perPage: number;
  filters: Partial<Record<FilterKeys<T>, string[]>>;
  sort:
    | {
        field: string;
        direction: SortDirectionEnum;
      }
    | undefined;
  setOrder: (order: SortDirectionEnum | undefined) => void;
  setOrderBy: (orderBy: string | undefined) => void;
  onChangeSort: (event: React.MouseEvent<unknown>, property: string) => void;
  setFilters: Dispatch<SetStateAction<Partial<Record<FilterKeys<T>, string[]>>>>;
  setPage: (page: number) => void;
  setPerPage: (perPage: number) => void;
  setSkip: (skip: number) => void;
}

interface Props {
  defaultOrderBy?: string;
  defaultSkip?: number;
  defaultPage?: number;
  defaultPerPage: number;
}

export const useBaseFilters = <T extends object>({
  defaultOrderBy,
  defaultSkip = DEFAULT_SKIP,
  defaultPage = 0,
  defaultPerPage,
}: Props): BaseFilters<T> => {
  const [order, setOrder] = useState<SortDirectionEnum | undefined>(SortDirectionEnum.Desc);
  const [orderBy, setOrderBy] = useState<string | undefined>(defaultOrderBy);

  const [page, setPage] = useState<number>(defaultPage);
  const [perPage, setPerPage] = useState<number>(defaultPerPage);
  const [skip, setSkip] = useState<number>(defaultSkip);

  const [filters, setFilters] = useState<Partial<Record<FilterKeys<T>, string[]>>>({});

  const onChangePerPage = useCallback((perPage: number) => {
    setPerPage((page + 1) * perPage);
    setPage(0);

    // const newSkip = (page + 1) * perPage limit;
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

  const handleChangePage = useCallback(
    (page: number) => {
      setPage(page);
      setPerPage((page + 1) * perPage);
    },
    [perPage],
  );

  return {
    order,
    orderBy,
    filters,
    perPage,
    skip,
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
    setPage: handleChangePage,
    setPerPage: onChangePerPage,
    setSkip,
  };
};
