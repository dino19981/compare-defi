import React from 'react';

import { PoolItem } from 'entities/pool/types';
import Link from 'next/link';
import { Card } from 'shared/ui';
import { CardContentItem } from 'shared/ui/Card';

export const PoolCard = ({
  fee,
  tvl,
  apr,
  firstToken,
  secondToken,
  badges,
  platform,
}: PoolItem) => {
  return (
    <Card
      header={<div>{platform.name}</div>}
      badges={badges?.map((badge) => ({ text: badge }))}
      footer={<Link href={platform.link}>Перейти</Link>}
    >
      <CardContentItem title="Fee" value={fee} />
      <CardContentItem title="TVL" value={tvl} />
      <CardContentItem title="APR" value={apr} />
      <CardContentItem title="First Token" value={firstToken.name} />
      <CardContentItem title="Second Token" value={secondToken.name} />
    </Card>
  );
};
