import React from 'react';

import { EarnCard, EarnCardSkeleton, EarnItem } from 'entities/earn';
import { EARN_ITEMS_DEFAULT_LIMIT } from 'entities/earn/constants/pagination';
import { CardsContainer } from 'shared/ui/Card';

interface Props {
  data: EarnItem[];

  isLoadingMore: boolean;
}

export const EarningCardsList = ({ data, isLoadingMore }: Props) => {
  return (
    <div>
      <CardsContainer>
        {data.map((item) => (
          <EarnCard key={item.id} {...item} />
        ))}
        {isLoadingMore &&
          Array.from({ length: EARN_ITEMS_DEFAULT_LIMIT }, (_, index) => (
            <EarnCardSkeleton key={`skeleton-${index}`} />
          ))}
      </CardsContainer>
    </div>
  );
};
