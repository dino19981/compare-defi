import { SortDirectionEnum } from 'shared/api/generated/Api';

import { EARN_ITEMS_DEFAULT_LIMIT } from './pagination';

export const fetchEarnItemsDefaultParams = {
  sort: {
    field: 'maxRate',
    direction: SortDirectionEnum.Desc,
  },
  limit: EARN_ITEMS_DEFAULT_LIMIT,
  skip: 0,
};
