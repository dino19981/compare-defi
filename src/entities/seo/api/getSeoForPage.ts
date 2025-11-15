'use server';

import { axiosInstance } from 'shared/api';
import { SeoResponseDto } from 'shared/api/generated/Api';
import { CACHE_CONFIG } from 'shared/lib/cache';

interface SeoParams {
  pathname: string;
  language: string;
}

export const getSeoForPage = async ({ pathname, language }: SeoParams) => {
  if (!pathname || !language) {
    return null;
  }

  try {
    const { data } = await axiosInstance.get<SeoResponseDto>('/seo', {
      params: {
        pathname,
        language,
      },
      headers: CACHE_CONFIG.STATIC.headers,
    });

    return data.data;
  } catch (error) {
    console.error('Error fetching SEO for page:', error);
    return null;
  }
};
