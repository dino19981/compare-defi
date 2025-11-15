'use client';

import React, { useState } from 'react';

import { GetPoolsResponse } from 'entities/pool/api';
import { POOLS_CONFIG_LOCALSTORAGE_NAME } from 'entities/pool/constants/config';
import { useGetPools } from 'entities/pool/lib';
import { BaseView, LastUpdateTime, LayoutContainer, ShowMoreButton } from 'shared/ui';

import { PoolCardsList, PoolFilters, PoolsTable } from '../components';
import { usePoolFilters } from '../lib';

interface Props {
  data: GetPoolsResponse;
}

export const PoolsPage = ({ data: initialData }: Props) => {
  const [view, setView] = useState<BaseView>(() => {
    const config = localStorage.getItem(POOLS_CONFIG_LOCALSTORAGE_NAME);

    return config ? JSON.parse(config).view || BaseView.Table : BaseView.Table;
  });

  const { tokensFilter, onSetTokensFilter, platformFilter, setPlatformFilter, baseFilters } =
    usePoolFilters();

  const { data, isFetching } = useGetPools(
    {
      filter: {
        ...tokensFilter,
        platforms: platformFilter,
      },
      ...(baseFilters.sort && { sort: baseFilters.sort }),
      limit: baseFilters.limit,
      skip: 0,
    },
    initialData,
  );
  console.log(data?.pagination.total, 'data.pagination.total');

  const items = data?.items || initialData.items;
  const platforms = data?.meta?.platforms || initialData.meta.platforms;

  const isLoadingMore = isFetching && (data?.items?.length || 0) !== 0;

  return (
    <LayoutContainer>
      <PoolFilters
        platforms={platforms}
        onChangeTokensFilter={onSetTokensFilter}
        onChangePlatformFilter={setPlatformFilter}
        loading={isFetching}
        view={view}
        setView={setView}
      />

      <LastUpdateTime />

      {view === BaseView.Table && (
        <PoolsTable data={items} baseFilters={baseFilters} isLoadingMore={isLoadingMore} />
      )}
      {view === BaseView.Card && <PoolCardsList data={items} isLoadingMore={isLoadingMore} />}

      {(data?.pagination.total || 0) > baseFilters.limit && (
        <ShowMoreButton onClick={baseFilters.onShowMore} />
      )}
    </LayoutContainer>
  );
};
