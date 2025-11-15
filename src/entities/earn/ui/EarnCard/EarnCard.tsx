import React from 'react';

import { EarnItem } from 'entities/earn';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Card, LogoWithName } from 'shared/ui';
import { CardContentItem } from 'shared/ui/Card';

export const EarnCard = ({ token, maxRate, duration, badges, platform }: EarnItem) => {
  const t = useTranslations('earn.features');

  return (
    <Card
      header={<LogoWithName logoSize={32} logo={token.icon} name={token.name} />}
      badges={badges?.map((badge) => ({ text: badge }))}
      footer={<Link href={platform.link}>Перейти</Link>}
      onClick={() => {
        window.open(platform.link, '_blank');
      }}
    >
      <CardContentItem
        title="Platform"
        value={<LogoWithName logo={platform.icon} name={platform.name} />}
      />
      <CardContentItem title={t('apy')} value={`${maxRate}`} />
      <CardContentItem title={t('duration')} value={duration} />
    </Card>
  );
};
