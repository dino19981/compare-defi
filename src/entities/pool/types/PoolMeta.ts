import { StaticImageData } from 'next/image';
import { PoolItemPlatformDtoNameEnum } from 'shared/api/generated/Api';

export interface PoolMeta {
  platforms: PoolMetaPlatform[];
}

export interface PoolMetaPlatform {
  name: PoolItemPlatformDtoNameEnum;
  icon: string | StaticImageData;
}
