import axios from 'axios';
import crypto from 'crypto';

import { OkxEarnsDto } from '../model';

class _BingXService {
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
    const endpoint = '/api/v5/finance/staking-defi/offers';
    const data = await this.axios<OkxEarnsDto>(
      // 'https://www.htx.com/-/x/hbg/v4/saving/mining/home?r=n3x9tg&x-b3-traceid=07d0c6cae296c2907a67dc05c88c84db',
      'https://api-app.qq-os.com/api/wealth-sales-trading/v1/product/list?searchType=&dataType=',
    );
    // const data = await this.axios<OkxEarnsDto>(this.url + endpoint, { headers: this.getHeaders() });

    return data.data;
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

export const BingXService = new _BingXService();
