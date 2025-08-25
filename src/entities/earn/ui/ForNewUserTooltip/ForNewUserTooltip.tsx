import InfoIcon from '@mui/icons-material/Info';

import React from 'react';

import { Tooltip } from '@mui/material';

import { useTranslations } from 'next-intl';

interface Props {}

export const ForNewUserTooltip = ({}: Props) => {
  const t = useTranslations('earn.newUser');

  return (
    <Tooltip title={<>{t('description')}</>} placement="top">
      <InfoIcon />
    </Tooltip>
  );
};
