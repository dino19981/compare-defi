import InfoIcon from '@mui/icons-material/Info';

import React from 'react';

import { Tooltip } from '@mui/material';

import { EarnItemRateSettings, EarnItemToken } from 'entities/earn/types';
import { useTranslations } from 'next-intl';
import { EarnItemRateSettingsDtoMaxEnum } from 'shared/api/generated/Api';
import { formatPercentage } from 'shared/lib';

interface Props {
  ratesSettings: EarnItemRateSettings[];
  token: EarnItemToken;
}

export const RatesSettingsTooltip = ({ ratesSettings, token }: Props) => {
  const t = useTranslations('earn.ratesSettings');

  return (
    <Tooltip
      title={
        <>
          {t('description')}
          {ratesSettings.map((item) => {
            if (item.max === EarnItemRateSettingsDtoMaxEnum.Infinity) {
              return (
                <p key={item.apy}>
                  &gt; {item.min} {token.name}: {formatPercentage(item.apy)}
                </p>
              );
            }

            return (
              <p key={item.apy}>
                {item.min} - {item.max} {token.name}: {formatPercentage(item.apy)}
              </p>
            );
          })}
        </>
      }
      placement="top"
    >
      <InfoIcon />
    </Tooltip>
  );
};
