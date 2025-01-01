import React from 'react';

import axios from 'axios';
import { getBybitEarnings } from 'features/bybit/api';
import { getOkxEarnings } from 'features/okx/api';
import { NextPage } from 'next';
import { EarnItem } from 'shared/model/earn';
import { getBitgetEarnings } from 'src/features/bitget/api';
import { EarningTable } from 'widgets/EarningTable';

export const Main: NextPage = async (props) => {
    let data = await getOkxEarnings();

    return (
        <div>
            <EarningTable data={data} />
        </div>
    );
};
