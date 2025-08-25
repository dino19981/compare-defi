import { StaticImageData } from 'next/image';
import { EarnItemPlatformDtoNameEnum } from 'shared/api/generated/Api';

import binance from '../assets/companies/binance.svg';
import bingx from '../assets/companies/bingX.svg';
import bitget from '../assets/companies/bitget.svg';
import bybit from '../assets/companies/bybit.svg';
import htx from '../assets/companies/htx.svg';
import jito from '../assets/companies/jito.svg';
import kucoin from '../assets/companies/kucoin.svg';
import lido from '../assets/companies/lido.svg';
import mellow from '../assets/companies/mellow.svg';
import mexc from '../assets/companies/mexc.svg';
import navi from '../assets/companies/navi.svg';
import okx from '../assets/companies/okx.svg';
import spark from '../assets/companies/spark.svg';
import venus from '../assets/companies/venus.svg';

// https://cryptologos.cc/
const companyLogos: Record<EarnItemPlatformDtoNameEnum, string> = {
  [EarnItemPlatformDtoNameEnum.Bitget]: bitget,
  [EarnItemPlatformDtoNameEnum.Bybit]: bybit,
  [EarnItemPlatformDtoNameEnum.Htx]: htx,
  [EarnItemPlatformDtoNameEnum.Binance]: binance,
  [EarnItemPlatformDtoNameEnum.Okx]: okx,
  [EarnItemPlatformDtoNameEnum.Kucoin]: kucoin,
  [EarnItemPlatformDtoNameEnum.Mexc]: mexc,
  [EarnItemPlatformDtoNameEnum.BingX]: bingx,
  [EarnItemPlatformDtoNameEnum.Jito]: jito,
  [EarnItemPlatformDtoNameEnum.Lido]: lido,
  [EarnItemPlatformDtoNameEnum.Mellow]: mellow,
  [EarnItemPlatformDtoNameEnum.Navi]: navi,
  [EarnItemPlatformDtoNameEnum.Spark]: spark,
  [EarnItemPlatformDtoNameEnum.Venus]: venus,
};

export const getCompanyLogoByName = (
  companyName: EarnItemPlatformDtoNameEnum,
): string | StaticImageData => {
  return companyLogos[companyName];
};
