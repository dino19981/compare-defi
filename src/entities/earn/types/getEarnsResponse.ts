import { EarnItem } from './EarnItem';
import { EarnMeta } from './EarnMeta';

export interface GetEarnsResponse {
  data: EarnItem[];
  meta: EarnMeta;
  pagination: {
    total: number;
  };
}
