'use client';

import React from 'react';

import { useGetPools } from 'entities/pool/lib';
import { PoolItem } from 'entities/pool/types';
import { PoolMetaPlatform } from 'entities/pool/types/PoolMeta';
import { PoolCard } from 'entities/pool/ui/PoolCard';

import { usePoolFilters } from '../lib';
import { PoolFilters } from './PoolFilters';
import styles from './PoolsList.module.scss';

interface Props {
  data: PoolItem[];
  platforms: PoolMetaPlatform[];
}

export const PoolsList = ({ data: _data, platforms }: Props) => {
  const { tokensFilter, onSetTokensFilter, platformFilter, setPlatformFilter } = usePoolFilters();

  const { data, isFetching } = useGetPools(
    {
      filter: {
        ...tokensFilter,
        platforms: platformFilter,
      },
      limit: 10,
    },
    _data,
  );

  const pools = data?.items || _data || [];

  return (
    <div>
      <PoolFilters
        platforms={platforms}
        onChangeTokensFilter={onSetTokensFilter}
        onChangePlatformFilter={setPlatformFilter}
        loading={isFetching}
      />

      <div className={styles.content}>
        {pools.map((item) => (
          <PoolCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
