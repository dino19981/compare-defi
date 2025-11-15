import React from 'react';

import { Skeleton } from '@mui/material';

import { Card } from 'shared/ui';

export const PoolCardSkeleton = () => {
  return (
    <Card header={<Skeleton width={70} height={32} />} footer={<Skeleton height={30} />}>
      <Skeleton height={19} />
      <Skeleton height={19} />
      <Skeleton height={19} />
      <Skeleton height={19} />
    </Card>
  );
};
