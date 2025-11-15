import React, { memo } from 'react';

import { Autocomplete, TextField } from '@mui/material';

import { useTranslations } from 'next-intl';
import { EarnMetaTokenDto } from 'shared/api/generated/Api';
import { LogoWithName } from 'shared/ui/LogoWithName';

// import styles from './EarningTableTokensFilter.module.scss';

interface Props {
  tokens: EarnMetaTokenDto[];

  onChange: (value: string[]) => void;
}

export const EarningTableTokensFilter = memo(({ tokens, onChange }: Props) => {
  const t = useTranslations('earn.filters');

  return (
    <Autocomplete
      disablePortal
      size="small"
      options={tokens}
      multiple
      limitTags={1}
      disableCloseOnSelect
      sx={{ width: 240 }}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => <TextField {...params} label={t('token')} />}
      renderOption={(props, option, { index }) => (
        <li {...props} key={index}>
          <LogoWithName logo={option.icon} name={option.name} />
        </li>
      )}
      onChange={(_, value) => onChange(value.map((item) => item.name))}
    />
  );
});

EarningTableTokensFilter.displayName = 'EarningTableTokensFilter';
