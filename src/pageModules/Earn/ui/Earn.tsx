import React from 'react';

import { getEarns } from 'entities/earn';
import { NextPage } from 'next';
import { SortDirectionEnum } from 'shared/api/generated/Api';
import { EarningTable } from 'widgets/EarningTable';

export const Earn: NextPage = async () => {
  const { data } = await getEarns({
    sort: {
      field: 'maxRate',
      direction: SortDirectionEnum.Desc,
    },
  });

  return (
    <div>
      <EarningTable data={data} />
    </div>
  );
};
