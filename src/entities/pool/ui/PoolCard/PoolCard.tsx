import React from 'react';

import { PoolItem } from 'entities/pool/types';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Card, DoubleLogoWithNames, LogoWithName } from 'shared/ui';
import { CardContentItem } from 'shared/ui/Card';

export const PoolCard = ({
  fee,
  tvl,
  apr,
  firstToken,
  secondToken,
  badges,
  platform,
  chain,
}: PoolItem) => {
  const t = useTranslations('pools.features');
  return (
    <Card
      header={
        <DoubleLogoWithNames
          firstLogoSize={32}
          secondLogoSize={21}
          firstLogo={firstToken.imageUrl}
          secondLogo={secondToken.imageUrl}
          firstName={firstToken.name}
          secondName={secondToken.name}
        />
      }
      badges={badges?.map((badge) => ({ text: badge }))}
      footer={<Link href={platform.link}>Перейти</Link>}
      onClick={() => {
        window.open(platform.link, '_blank');
      }}
    >
      <CardContentItem title={t('apr')} value={apr} />
      <CardContentItem
        title={t('platform')}
        value={<LogoWithName logo={platform.icon} name={platform.name} />}
      />
      <CardContentItem title={t('fee')} value={`${fee}%`} />
      <CardContentItem title={t('tvl')} value={tvl} />
      <CardContentItem
        title={t('chain')}
        value={<LogoWithName logo={chain.imageUrl} name={chain.name} />}
      />
    </Card>
  );
};
