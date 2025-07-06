import axios from 'axios';
import crypto from 'crypto';

import { KucoinEarnsDto } from '../model';

class _KucoinService {
    private url: string = 'https://www.kucoin.com';
    private axios = axios.create({
        timeout: 5000,
        responseType: 'json',
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });

    getEarnings = async () => {
        const { data } = await this.axios<KucoinEarnsDto>(`${this.url}/_pxapi/pool-staking/v4/low-risk/currencies-products?lang=ru_RU`);

        return data;
    };

    private getHeaders = () => {
        const endpoint = '/api/v2/earn/savings/product?filter=available_and_held';

        const timestamp = Date.now().toString();
        const message = timestamp + 'GET' + endpoint;
        const signature = crypto.createHmac('sha256', process.env.OKX_SECRET_KEY!).update(message).digest('base64');

        return {
            'OK-ACCESS-KEY': process.env.OKX_API_KEY,
            'OK-ACCESS-SIGN': signature,
            'OK-ACCESS-TIMESTAMP': timestamp,
            'OK-ACCESS-PASSPHRASE': process.env.OKX_PASS,
            'Content-Type': 'application/json',
        };
    };
}

export const KucoinService = new _KucoinService();
