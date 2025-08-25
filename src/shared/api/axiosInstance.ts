import axios from 'axios';

import { API_CONFIG } from './config';

export const axiosInstance = axios.create(API_CONFIG);

export type { AxiosRequestConfig, AxiosResponse } from 'axios';
