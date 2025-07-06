import axios from 'axios';

import { HtxEarnsDto } from '../model';

class _HtxService {
  private url: string = 'https://www.htx.com';
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
    const data = await this.axios<HtxEarnsDto>(
      `${this.url}/-/x/hbg/v4/saving/mining/home?r=n3x9tg&x-b3-traceid=07d0c6cae296c2907a67dc05c88c84db`,
    );

    return data.data;
  };
}

export const HtxService = new _HtxService();
