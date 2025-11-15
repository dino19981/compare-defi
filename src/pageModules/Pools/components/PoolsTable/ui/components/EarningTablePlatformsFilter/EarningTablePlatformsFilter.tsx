import React, { memo, useMemo } from 'react';

import { Autocomplete, TextField } from '@mui/material';

import { EarnItem, EarnItemPlatform } from 'entities/earn';
import { useTranslations } from 'next-intl';
import { EarnItemPlatformDtoNameEnum } from 'shared/api/generated/Api';
import { LogoWithName } from 'shared/ui/LogoWithName';

interface Props {
  data: EarnItem[];

  onChange: (value: EarnItemPlatformDtoNameEnum[]) => void;
}

export const EarningTablePlatformsFilter = memo(({ data, onChange }: Props) => {
  const t = useTranslations('earn.filters');

  const options = useMemo(() => {
    const uniquePlatforms: Set<string> = new Set([]);
    const platforms: EarnItemPlatform[] = [];

    data.forEach((item) => {
      if (!uniquePlatforms.has(item.platform.name)) {
        platforms.push(item.platform);
        uniquePlatforms.add(item.platform.name);
      }
    });

    return platforms;
  }, [data.length]);

  return (
    <Autocomplete
      disablePortal
      size="small"
      options={options}
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

EarningTablePlatformsFilter.displayName = 'EarningTablePlatformsFilter';
