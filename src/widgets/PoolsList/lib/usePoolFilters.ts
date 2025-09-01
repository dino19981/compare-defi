import { useState } from 'react';

import { MetaDtoPlatformsEnum } from 'shared/api/generated/Api';

interface TokensFilter {
  firstTokens: string[];
  secondTokens?: string[];
}

export const usePoolFilters = () => {
  const [tokensFilter, setTokensFilter] = useState<TokensFilter | undefined>(undefined);
  const [platformFilter, setPlatformFilter] = useState<MetaDtoPlatformsEnum[] | undefined>(
    undefined,
  );

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

  return { tokensFilter, onSetTokensFilter, platformFilter, setPlatformFilter };
};

function formatTokens(input: string) {
  return input.split(',');
}
