import React, { memo } from 'react';

import { EarnItem } from 'entities/earn/types';
import { useTranslations } from 'next-intl';
import { EarnItemDtoDurationEnum } from 'shared/api/generated/Api';
import { pluralize } from 'shared/lib/pluralize';

interface Props {
  duration: EarnItem['duration'];
}

export const DurationCellContent = memo(({ duration }: Props) => {
  const t = useTranslations('pluralizes');

  const value =
    duration === EarnItemDtoDurationEnum.Infinity
      ? t('infinity')
      : `${pluralize(duration, t('days.one'), t('days.few'), t('days.many'))}`;

  return <div>{value}</div>;
});

DurationCellContent.displayName = 'DurationCellContent';
