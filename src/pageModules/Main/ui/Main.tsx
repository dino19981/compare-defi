import React from 'react';

import axios from 'axios';
import { getBinanceEarnings } from 'features/binance/api';
import { getBybitEarnings } from 'features/bybit/api';
import { getOkxEarnings } from 'features/okx/api';
import { NextPage } from 'next';
import { EarnItem } from 'shared/model/earn';
import { getBitgetEarnings } from 'src/features/bitget/api';
import { EarningTable } from 'widgets/EarningTable';

import { getEarns } from '../lib/getEarns';

export const Main: NextPage = async () => {
    const { data, pages } = await getEarns();
    // let data = await getOkxEarnings();

    return (
        <div>
            <EarningTable data={data} pages={pages} />
        </div>
    );
};
