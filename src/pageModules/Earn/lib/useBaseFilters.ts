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
  limit: number;
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
  setLimit: (limit: number) => void;
  setSkip: (skip: number) => void;
  onShowMore: () => void;
}

interface Props {
  defaultOrderBy?: string;
  defaultSkip?: number;
  defaultLimit?: number;
}

export const useBaseFilters = <T extends object>({
  defaultOrderBy,
  defaultSkip = DEFAULT_SKIP,
  defaultLimit = 0,
}: Props): BaseFilters<T> => {
  const [order, setOrder] = useState<SortDirectionEnum | undefined>(SortDirectionEnum.Desc);
  const [orderBy, setOrderBy] = useState<string | undefined>(defaultOrderBy);

  const [limit, setLimit] = useState<number>(defaultLimit);
  const [skip, setSkip] = useState<number>(defaultSkip);

  const [filters, setFilters] = useState<Partial<Record<FilterKeys<T>, string[]>>>({});

  const onShowMore = () => {
    setLimit(limit + defaultLimit);
    // setSkip(skip + defaultSkip);
  };

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
    limit,
    skip,
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
    setLimit,
    setSkip,
    onShowMore,
  };
};
