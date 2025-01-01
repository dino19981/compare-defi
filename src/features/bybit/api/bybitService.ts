import axios from 'axios';
import crypto from 'crypto';

import { BitgetEarnsDto } from '../model/bitgetEarnDto';

class _BybitService {
    private url: string = 'https://api.bybit.com';
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
        const endpoint = '/v5/broker/earnings-info';
        const data = await this.axios<BitgetEarnsDto>(this.url + endpoint, { headers: this.getHeaders() });

        return data.data;
    };

    private getHeaders = () => {
        const endpoint = '/v5/broker/earnings-info';

        const timestamp = Date.now().toString();
        const signature = crypto
            .createHmac('sha256', process.env.BYBIT_SECRET_KEY!)
            .update(timestamp + process.env.BYBIT_API_KEY! + 5000)
            .digest('hex');

        return {
            'X-BAPI-SIGN-TYPE': '2',
            'X-BAPI-SIGN': signature,
            'X-BAPI-API-KEY': process.env.BYBIT_API_KEY,
            'X-BAPI-TIMESTAMP': timestamp,
            'X-BAPI-RECV-WINDOW': 5000,
            'Content-Type': 'application/json',
        };
    };
}

export const BybitService = new _BybitService();
