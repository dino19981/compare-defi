'use client';

import React, { useState } from 'react';

import { EarnItem, GetEarnsResponse } from 'entities/earn';
import { EARN_CONFIG_LOCALSTORAGE_NAME } from 'entities/earn/constants/config';
import { EARN_ITEMS_DEFAULT_LIMIT } from 'entities/earn/constants/pagination';
import { useGetEarns } from 'entities/earn/lib';
import { BaseView, LastUpdateTime, ShowMoreButton } from 'shared/ui';

import { EarningCardsList, EarningFiltersToolbar, EarningTable } from '../components';
import { useBaseFilters } from '../lib';

interface Props {
  data: GetEarnsResponse;
}

export const EarnClientContent = ({ data: initialData }: Props) => {
  const [view, setView] = useState<BaseView>(() => {
    const config = localStorage.getItem(EARN_CONFIG_LOCALSTORAGE_NAME);

    return config ? JSON.parse(config).view || BaseView.Table : BaseView.Table;
  });

  const filters = useBaseFilters<EarnItem>({
    defaultOrderBy: 'maxRate',
    defaultLimit: EARN_ITEMS_DEFAULT_LIMIT,
  });

  const { data: earns, isFetching } = useGetEarns(initialData, {
    sort: filters.sort,
    filter: filters.filters,
    limit: filters.limit,
    skip: 0,
  });

  const items = earns?.data || initialData?.data;

  const isLoadingMore = isFetching && (earns?.data?.length || 0) !== 0;

  return (
    <>
      <EarningFiltersToolbar
        view={view}
        setView={setView}
        platforms={earns?.meta.platforms || []}
        tokens={earns?.meta?.tokens || []}
        onChangeTokensFilter={(value) =>
          filters.setFilters((prev) => ({ ...prev, tokenName: value }))
        }
        onChangePlatformFilter={(value) =>
          filters.setFilters((prev) => ({ ...prev, platformName: value }))
        }
      />

      <LastUpdateTime />

      {view === BaseView.Table && (
        <EarningTable data={items} baseFilters={filters} isLoadingMore={isLoadingMore} />
      )}
      {view === BaseView.Card && <EarningCardsList data={items} isLoadingMore={isLoadingMore} />}

      {(earns?.pagination.total || 0) > filters.limit && (
        <ShowMoreButton onClick={filters.onShowMore} />
      )}
    </>
  );
};
