import { StaticImageData } from 'next/image';
import { EarnItemTokenDtoNameEnum } from 'shared/api/generated/Api';

import btc from '../assets/tokens/btc.svg';
import eth from '../assets/tokens/eth.svg';
import solana from '../assets/tokens/solana.svg';
import sui from '../assets/tokens/sui.svg';
import usdc from '../assets/tokens/usdc.svg';
import usde from '../assets/tokens/usde.svg';
import usdt from '../assets/tokens/usdt.svg';

const tokenLogos: Record<EarnItemTokenDtoNameEnum, string> = {
  // usdt
  [EarnItemTokenDtoNameEnum.USDT]: usdt,
  [EarnItemTokenDtoNameEnum.SuiUSDT]: usdt,
  [EarnItemTokenDtoNameEnum.WUSDT]: usdt,

  // usdc
  [EarnItemTokenDtoNameEnum.USDC]: usdc,
  [EarnItemTokenDtoNameEnum.WUSDC]: usdc,

  // usde
  [EarnItemTokenDtoNameEnum.USDE]: usde,

  // btc
  [EarnItemTokenDtoNameEnum.BTC]: btc,
  [EarnItemTokenDtoNameEnum.SuiWBTC]: btc,
  [EarnItemTokenDtoNameEnum.WBTC]: btc,
  [EarnItemTokenDtoNameEnum.LBTC]: btc,

  // eth
  [EarnItemTokenDtoNameEnum.ETH]: eth,
  [EarnItemTokenDtoNameEnum.WETH]: eth,
  [EarnItemTokenDtoNameEnum.SuiETH]: eth,

  // solana
  [EarnItemTokenDtoNameEnum.SOL]: solana,

  // sui
  [EarnItemTokenDtoNameEnum.SUI]: sui,
  [EarnItemTokenDtoNameEnum.VSUI]: sui,
  [EarnItemTokenDtoNameEnum.StSUI]: sui,
  [EarnItemTokenDtoNameEnum.HaSUI]: sui,
};

export const getTokenLogoByName = (tokenName: string): string | StaticImageData | undefined => {
  return Object.entries(tokenLogos).find(
    ([name]) => name.toLowerCase() === tokenName.toLowerCase(),
  )?.[1];
};
