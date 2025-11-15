import { useState } from 'react';

import { EARN_ITEMS_DEFAULT_LIMIT, EARN_ITEMS_DEFAULT_SORT } from 'entities/earn';
import { PoolItem } from 'entities/pool/types';
import { PoolItemPlatformDtoNameEnum } from 'shared/api/generated/Api';
import { useBaseFiltersV2 } from 'shared/lib';

interface TokensFilter {
  firstTokens: string[];
  secondTokens?: string[];
}

export const usePoolFilters = () => {
  const [tokensFilter, setTokensFilter] = useState<TokensFilter | undefined>(undefined);
  const [platformFilter, setPlatformFilter] = useState<PoolItemPlatformDtoNameEnum[] | undefined>(
    undefined,
  );

  const baseFilters = useBaseFiltersV2<PoolItem>({
    defaultOrderBy: EARN_ITEMS_DEFAULT_SORT.field,
    defaultLimit: EARN_ITEMS_DEFAULT_LIMIT,
  });

  const onSetTokensFilter = (input: string) => {
    if (!input) {
      setTokensFilter(undefined);
      return;
    }

    const [firstToken, secondToken] = input.split('/');

    setTokensFilter({
      firstTokens: formatTokens(firstToken),
      ...(secondToken && { secondTokens: formatTokens(secondToken) }),
    });
  };

  return { tokensFilter, onSetTokensFilter, platformFilter, setPlatformFilter, baseFilters };
};

function formatTokens(input: string) {
  return input.split(',');
}
