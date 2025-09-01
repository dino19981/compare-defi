import React, { memo } from 'react';

import { Autocomplete, TextField } from '@mui/material';

import { PoolMetaPlatform } from 'entities/pool/types/PoolMeta';
import { useTranslations } from 'next-intl';
import { MetaDtoPlatformsEnum } from 'shared/api/generated/Api';
import { LogoWithName } from 'shared/ui/LogoWithName';

interface Props {
  platforms: PoolMetaPlatform[];

  onChange: (value: MetaDtoPlatformsEnum[]) => void;
}

export const PoolPlatformsFilter = memo(({ platforms, onChange }: Props) => {
  const t = useTranslations('earn.table.filters');

  return (
    <Autocomplete
      disablePortal
      size="small"
      options={platforms}
      multiple
      limitTags={1}
      disableCloseOnSelect
      sx={{ width: 240 }}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => <TextField {...params} label={t('platform')} />}
      renderOption={(props, option, { index }) => (
        <li {...props} key={index}>
          <LogoWithName logo={option.icon} name={option.name} />
        </li>
      )}
      onChange={(_, value) => onChange(value.map((item) => item.name))}
    />
  );
});

PoolPlatformsFilter.displayName = 'PoolPlatformsFilter';
