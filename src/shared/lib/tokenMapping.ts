import { EarnItemTokenDtoNameEnum } from '../api/generated/Api';

/**
 * Маппинг производных токенов к их базовым токенам
 * Используется для группировки токенов по их основной валюте
 */
export const tokenMapping: Record<EarnItemTokenDtoNameEnum, EarnItemTokenDtoNameEnum> = {
  // USDT и его производные
  [EarnItemTokenDtoNameEnum.USDT]: EarnItemTokenDtoNameEnum.USDT,
  [EarnItemTokenDtoNameEnum.SuiUSDT]: EarnItemTokenDtoNameEnum.USDT,
  [EarnItemTokenDtoNameEnum.WUSDT]: EarnItemTokenDtoNameEnum.USDT,

  // USDC и его производные
  [EarnItemTokenDtoNameEnum.USDC]: EarnItemTokenDtoNameEnum.USDC,
  [EarnItemTokenDtoNameEnum.WUSDC]: EarnItemTokenDtoNameEnum.USDC,

  // ETH и его производные
  [EarnItemTokenDtoNameEnum.ETH]: EarnItemTokenDtoNameEnum.ETH,
  [EarnItemTokenDtoNameEnum.WETH]: EarnItemTokenDtoNameEnum.ETH,
  [EarnItemTokenDtoNameEnum.SuiETH]: EarnItemTokenDtoNameEnum.ETH,

  // BTC и его производные
  [EarnItemTokenDtoNameEnum.BTC]: EarnItemTokenDtoNameEnum.BTC,
  [EarnItemTokenDtoNameEnum.WBTC]: EarnItemTokenDtoNameEnum.BTC,
  [EarnItemTokenDtoNameEnum.SuiWBTC]: EarnItemTokenDtoNameEnum.BTC,
  [EarnItemTokenDtoNameEnum.LBTC]: EarnItemTokenDtoNameEnum.BTC,

  // SUI и его производные
  [EarnItemTokenDtoNameEnum.SUI]: EarnItemTokenDtoNameEnum.SUI,
  [EarnItemTokenDtoNameEnum.VSUI]: EarnItemTokenDtoNameEnum.SUI,
  [EarnItemTokenDtoNameEnum.StSUI]: EarnItemTokenDtoNameEnum.SUI,
  [EarnItemTokenDtoNameEnum.HaSUI]: EarnItemTokenDtoNameEnum.SUI,

  // Остальные токены без производных
  [EarnItemTokenDtoNameEnum.USDE]: EarnItemTokenDtoNameEnum.USDE,
  [EarnItemTokenDtoNameEnum.SOL]: EarnItemTokenDtoNameEnum.SOL,
};

/**
 * Получить базовый токен для производного токена
 * @param token - производный токен
 * @returns базовый токен
 */
export const getBaseToken = (token: EarnItemTokenDtoNameEnum): EarnItemTokenDtoNameEnum => {
  return tokenMapping[token];
};

/**
 * Проверить, является ли токен производным
 * @param token - токен для проверки
 * @returns true, если токен является производным
 */
export const isDerivativeToken = (token: EarnItemTokenDtoNameEnum): boolean => {
  return tokenMapping[token] !== token;
};
