import { StaticImageData } from 'next/image';
import { EarnItemPlatformDtoNameEnum, EarnMetaTokenDto } from 'shared/api/generated/Api';

export interface EarnMeta {
  platforms: EarnMetaPlatform[];
  tokens: EarnMetaTokenDto[];
}

export interface EarnMetaPlatform {
  name: EarnItemPlatformDtoNameEnum;
  icon: string | StaticImageData;
}
