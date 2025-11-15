import React from 'react';

import { useTranslations } from 'next-intl';

export const LastUpdateTime = () => {
  const t = useTranslations('common');

  return <div>{t('lastUpdateTime', { date: new Date().toLocaleDateString() })}</div>;
};
