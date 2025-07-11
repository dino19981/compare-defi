import axios from 'axios';
import crypto from 'crypto';

import { OkxEarnsDto } from '../model';

class _OkxService {
  private url: string = 'https://www.okx.com';
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
    const data = await this.axios<OkxEarnsDto>(
      'https://www.okx.com/priapi/v1/earn/simple-earn/all-products?type=all&t=1735749419904',
    );

    return data.data;
  };

  private getHeaders = () => {
    const endpoint = '/api/v2/earn/savings/product?filter=available_and_held';

    const timestamp = Date.now().toString();
    const message = timestamp + 'GET' + endpoint;
    const signature = crypto
      .createHmac('sha256', process.env.OKX_SECRET_KEY!)
      .update(message)
      .digest('base64');

    return {
      'OK-ACCESS-KEY': process.env.OKX_API_KEY,
      'OK-ACCESS-SIGN': signature,
      'OK-ACCESS-TIMESTAMP': timestamp,
      'OK-ACCESS-PASSPHRASE': process.env.OKX_PASS,
      'Content-Type': 'application/json',
    };
  };
}

export const OkxService = new _OkxService();
