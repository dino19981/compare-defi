import InfoIcon from '@mui/icons-material/Info';

import React from 'react';

import { Tooltip } from '@mui/material';

import { useTranslations } from 'next-intl';

export const ForNewUserTooltip = () => {
  const t = useTranslations('earn.newUser');

  return (
    <Tooltip title={<>{t('description')}</>} placement="top">
      <InfoIcon />
    </Tooltip>
  );
};
