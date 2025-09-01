'use client';

import React, { useState } from 'react';
import { useDebounce } from 'react-use';

import { PoolMetaPlatform } from 'entities/pool/types/PoolMeta';
import { MetaDtoPlatformsEnum } from 'shared/api/generated/Api';
import { Input, Loader } from 'shared/ui';

import { PoolPlatformsFilter } from '../PoolPlatformsFilter/PoolPlatformsFilter';
import styles from './PoolFilters.module.scss';

interface Props {
  platforms: PoolMetaPlatform[];
  loading: boolean;

  onChangeTokensFilter: (input: string) => void;
  onChangePlatformFilter: (value: MetaDtoPlatformsEnum[]) => void;
}

export const PoolFilters = ({
  platforms,
  loading,
  onChangeTokensFilter,
  onChangePlatformFilter,
}: Props) => {
  const [value, setValue] = useState('');
  useDebounce(
    () => {
      console.log(value, 'wqeqwewq');
      onChangeTokensFilter(value);
    },
    500,
    [value],
  );

  return (
    <div className={styles.container}>
      <PoolPlatformsFilter platforms={platforms} onChange={onChangePlatformFilter} />

      <Input
        className={styles.tokensFilter}
        placeholder="usdt/bnb or usdt,bnb/btc,eth"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {loading && <Loader />}
    </div>
  );
};
