import { StaticImageData } from 'next/image';
import { PoolItemDto, PoolItemPlatformDto } from 'shared/api/generated/Api';

export interface PoolItemPlatform extends PoolItemPlatformDto {
  icon: string | StaticImageData | undefined;
}

export type PoolItem = Omit<PoolItemDto, 'platform' | 'apr'> & {
  platform: PoolItemPlatform;
  apr: string;
};
