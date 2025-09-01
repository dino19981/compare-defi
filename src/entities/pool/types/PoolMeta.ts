import { StaticImageData } from 'next/image';
import { MetaDtoPlatformsEnum } from 'shared/api/generated/Api';

export interface PoolMeta {
  platforms: PoolMetaPlatform[];
}

export interface PoolMetaPlatform {
  name: MetaDtoPlatformsEnum;
  icon: string | StaticImageData;
}
