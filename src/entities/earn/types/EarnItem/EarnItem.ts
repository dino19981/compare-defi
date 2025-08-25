import { EarnItemDto } from 'shared/api/generated/Api';

import { EarnItemPlatform } from './EarnItemPlatform';
import { EarnItemToken } from './EarnItemToken';

export interface EarnItem extends Omit<EarnItemDto, 'token' | 'platform'> {
  token: EarnItemToken;
  platform: EarnItemPlatform;
}
