import React, { memo } from 'react';

import { Autocomplete, TextField } from '@mui/material';

import { EarnMetaPlatform } from 'entities/earn';
import { useTranslations } from 'next-intl';
import { EarnItemPlatformDtoNameEnum } from 'shared/api/generated/Api';
import { LogoWithName } from 'shared/ui/LogoWithName';

interface Props {
  platforms: EarnMetaPlatform[];

  onChange: (value: EarnItemPlatformDtoNameEnum[]) => void;
}

export const EarningTablePlatformsFilter = memo(({ platforms, onChange }: Props) => {
  const t = useTranslations('common');

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
      renderInput={(params) => <TextField {...params} label={t('searchPlatform')} />}
      renderOption={(props, option, { index }) => (
        <li {...props} key={index}>
          <LogoWithName logo={option.icon} name={option.name} />
        </li>
      )}
      onChange={(_, value) => onChange(value.map((item) => item.name))}
    />
  );
});

EarningTablePlatformsFilter.displayName = 'EarningTablePlatformsFilter';
