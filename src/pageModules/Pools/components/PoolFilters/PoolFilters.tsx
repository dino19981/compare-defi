'use client';

import React, { useState } from 'react';
import { useDebounce } from 'react-use';

import { POOLS_CONFIG_LOCALSTORAGE_NAME } from 'entities/pool/constants/config';
import { PoolMetaPlatform } from 'entities/pool/types/PoolMeta';
import { PoolItemPlatformDtoNameEnum } from 'shared/api/generated/Api';
import { BaseView, CardTableToggler, Input, Loader } from 'shared/ui';

import styles from './PoolFilters.module.scss';
import { PoolPlatformsFilter } from './PoolPlatformsFilter/PoolPlatformsFilter';

interface Props {
  platforms: PoolMetaPlatform[];
  view: BaseView;
  loading: boolean;

  setView: (view: BaseView) => void;
  onChangeTokensFilter: (input: string) => void;
  onChangePlatformFilter: (value: PoolItemPlatformDtoNameEnum[]) => void;
}

export const PoolFilters = ({
  platforms,
  view,
  loading,
  onChangeTokensFilter,
  onChangePlatformFilter,
  setView,
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
      <div className={styles.filters}>
        <PoolPlatformsFilter platforms={platforms} onChange={onChangePlatformFilter} />

        <Input
          className={styles.tokensFilter}
          placeholder="usdt/bnb or usdt,bnb/btc,eth"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          size="small"
        />

        {loading && <Loader />}
      </div>

      <CardTableToggler view={view} setView={setView} configName={POOLS_CONFIG_LOCALSTORAGE_NAME} />
    </div>
  );
};
