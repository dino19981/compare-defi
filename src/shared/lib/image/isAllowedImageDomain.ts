/**
 * Проверяет, разрешен ли домен для использования в Next.js Image компоненте
 * Список должен соответствовать remotePatterns в next.config.ts
 */

const ALLOWED_DOMAINS = [
  'tokens.pancakeswap.finance',
  'coin-images.coingecko.com',
  'raw.githubusercontent.com',
  'token-icons.s3.amazonaws.com',
  'gateway.irys.xyz',
  'archive.cetus.zone',
  'img-v1.raydium.io',
  'cdn.1stdigital.com',
  'www.bucketprotocol.io',
  's1.bycsi.com',
  'momentum-statics.s3.us-west-1.amazonaws.com',
  'node1.irys.xyz',
  'aftermath.finance',
] as const;

const ALLOWED_PATTERNS = [
  /^.*\.arweave\.net$/,
  /^.*\.s3\..*\.amazonaws\.com$/,
  /^.*\.s3\.amazonaws\.com$/,
  /^.*\.githubusercontent\.com$/,
] as const;

/**
 * Извлекает hostname из URL
 */
const getHostname = (url: string | undefined | null): string | null => {
  if (!url || typeof url !== 'string') {
    return null;
  }

  try {
    // Если это относительный путь или data URL, возвращаем null
    if (url.startsWith('/') || url.startsWith('data:') || url.startsWith('blob:')) {
      return null;
    }

    const urlObj = new URL(url);
    return urlObj.hostname;
  } catch {
    return null;
  }
};

/**
 * Проверяет, разрешен ли домен для использования в Next.js Image
 */
export const isAllowedImageDomain = (src: string | undefined | null): boolean => {
  const hostname = getHostname(src);

  if (!hostname) {
    // Относительные пути и data URLs разрешены
    return true;
  }

  // Проверяем точное совпадение
  if (ALLOWED_DOMAINS.includes(hostname as (typeof ALLOWED_DOMAINS)[number])) {
    return true;
  }

  // Проверяем паттерны
  return ALLOWED_PATTERNS.some((pattern) => pattern.test(hostname));
};
