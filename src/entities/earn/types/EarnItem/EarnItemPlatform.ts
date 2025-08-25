import { StaticImageData } from 'next/image';
import { EarnItemPlatformDto } from 'shared/api/generated/Api';

export interface EarnItemPlatform extends EarnItemPlatformDto {
  icon: string | StaticImageData | undefined;
}
