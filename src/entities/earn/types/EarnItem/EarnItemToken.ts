import { StaticImageData } from 'next/image';
import { EarnItemTokenDto } from 'shared/api/generated/Api';

export interface EarnItemToken extends EarnItemTokenDto {
  icon: string | StaticImageData | undefined;
}
