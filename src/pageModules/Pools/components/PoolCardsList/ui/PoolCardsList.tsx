'use client';

import React from 'react';

import { PoolCardSkeleton } from 'entities/pool';
import { POOL_ITEMS_DEFAULT_LIMIT } from 'entities/pool/constants/pagination';
import { PoolItem } from 'entities/pool/types';
import { PoolCard } from 'entities/pool/ui/PoolCard';
import { CardsContainer } from 'shared/ui/Card';

interface Props {
  data: PoolItem[];
  isLoadingMore: boolean;
}

export const PoolCardsList = ({ data, isLoadingMore }: Props) => {
  return (
    <CardsContainer>
      {data.map((item) => (
        <PoolCard key={item.id} {...item} />
      ))}

      {isLoadingMore &&
        Array.from({ length: POOL_ITEMS_DEFAULT_LIMIT }, (_, index) => (
          <PoolCardSkeleton key={`skeleton-${index}`} />
        ))}
    </CardsContainer>
  );
};
