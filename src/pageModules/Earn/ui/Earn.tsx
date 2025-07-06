import React from 'react';

import { NextPage } from 'next';
import { EarningTable } from 'widgets/EarningTable';

import { getEarns } from '../lib/getEarns';

export const Earn: NextPage = async () => {
  const { data, pages } = await getEarns();
  // const data = await getKukoinEarnings();
  // console.log(data, 'data');

  return (
    <div>
      {/* <EarningTable data={data} pages={2} /> */}
      <EarningTable data={data} pages={pages} />
    </div>
  );
};
