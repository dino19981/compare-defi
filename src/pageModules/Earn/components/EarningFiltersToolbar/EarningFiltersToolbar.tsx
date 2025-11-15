import React from 'react';

import { Toolbar } from '@mui/material';

import { EarnMetaPlatform } from 'entities/earn';
import { EARN_CONFIG_LOCALSTORAGE_NAME } from 'entities/earn/constants/config';
import { EarnItemPlatformDtoNameEnum, EarnMetaTokenDto } from 'shared/api/generated/Api';
import { BaseView, CardTableToggler } from 'shared/ui';

import styles from './EarningFiltersToolbar.module.scss';
import { EarningTablePlatformsFilter, EarningTableTokensFilter } from './components';

interface Props {
  view: BaseView;
  platforms: EarnMetaPlatform[];
  tokens: EarnMetaTokenDto[];

  setView: (view: BaseView) => void;
  onChangeTokensFilter: (value: string[]) => void;
  onChangePlatformFilter: (value: EarnItemPlatformDtoNameEnum[]) => void;
}

export const EarningFiltersToolbar = ({
  platforms,
  tokens,
  view,
  setView,
  onChangeTokensFilter,
  onChangePlatformFilter,
}: Props) => {
  return (
    <div className={styles.container}>
      <Toolbar className={styles.toolbar}>
        <div className={styles.filters}>
          <EarningTableTokensFilter
            tokens={tokens}
            onChange={(value) => onChangeTokensFilter(value)}
          />
          <EarningTablePlatformsFilter
            platforms={platforms}
            onChange={(value) => onChangePlatformFilter(value)}
          />
        </div>

        <CardTableToggler
          view={view}
          setView={setView}
          configName={EARN_CONFIG_LOCALSTORAGE_NAME}
        />
      </Toolbar>
    </div>
  );
};
