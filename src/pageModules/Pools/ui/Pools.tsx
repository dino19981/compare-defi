import React from 'react';

import { getPools } from 'entities/pool/api';
import { NextPage } from 'next';
import { PoolsList } from 'widgets/PoolsList';

export const Pools: NextPage = async () => {
  const data = await getPools({ limit: 10 });

  return (
    <div>
      <PoolsList data={data.items} platforms={data.meta.platforms} />
    </div>
  );
};
