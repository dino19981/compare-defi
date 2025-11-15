import React, { memo, useMemo } from 'react';

import { Autocomplete, TextField } from '@mui/material';

import { EarnItem, EarnItemToken } from 'entities/earn';
import { useTranslations } from 'next-intl';
import { LogoWithName } from 'shared/ui/LogoWithName';

// import styles from './EarningTableTokensFilter.module.scss';

interface Props {
  data: EarnItem[];

  onChange: (value: string[]) => void;
}

export const EarningTableTokensFilter = memo(({ data, onChange }: Props) => {
  const t = useTranslations('earn.filters');

  const options = useMemo(() => {
    const uniqueTokens: Set<string> = new Set([]);
    const tokens: EarnItemToken[] = [];

    data.forEach((item) => {
      const baseToken = item.token.name;

      if (!uniqueTokens.has(baseToken)) {
        tokens.push(item.token);
        uniqueTokens.add(baseToken);
      }
    });

    return tokens;
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
