export const API_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3010',
  timeout: 5000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
} as const;

export const SWAGGER_PATH = '/swagger-json';

export const API_ENDPOINTS = {
  earn: '/earn',
} as const;
