export const EarnRoutes = {
  Earn: '/earn',
  EarnStables: '/earn/stables',
  EarnEthereum: '/earn/ethereum',
  EarnSolana: '/earn/solana',
  EarnPolygon: '/earn/polygon',
  EarnBsc: '/earn/bsc',
  EarnArbitrum: '/earn/arbitrum',
  EarnOptimism: '/earn/optimism',
  EarnBase: '/earn/base',
  EarnAvalanche: '/earn/avalanche',
};

export const earnRoutesList = Object.values(EarnRoutes);

export const PoolsRoutes = {
  Pools: '/pools',
};

export const Routes = {
  ...EarnRoutes,
  ...PoolsRoutes,
};
