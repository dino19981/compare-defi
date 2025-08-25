import React from 'react';

import { getEarns } from 'entities/earn';
import { NextPage } from 'next';
import { EarningTable } from 'widgets/EarningTable';

export const Earn: NextPage = async () => {
  const { data } = await getEarns();

  return (
    <div>
      <EarningTable data={data} />
    </div>
  );
};
