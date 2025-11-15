import { Link, Stack } from '@mui/material';

import { PoolItem } from 'entities/pool/types';
import { DoubleLogoWithNames } from 'shared/ui';
import { LogoWithName } from 'shared/ui/LogoWithName';
import { TableCellProps } from 'shared/ui/Table';
import { v4 as uuid } from 'uuid';

const emptyRow = [
  {
    children: <Stack style={{ padding: '10px' }} />,
    key: uuid(),
  },
  {
    children: <Stack style={{ padding: '10px' }} />,
    key: uuid(),
  },
  {
    children: <Stack style={{ padding: '10px' }} />,
    key: uuid(),
  },
  {
    children: <Stack style={{ padding: '10px' }} />,
    key: uuid(),
  },
  {
    children: <Stack style={{ padding: '10px' }} />,
    key: uuid(),
  },
];

export const formatBodyData = (
  data: PoolItem | undefined,
  t: (key: string, values?: { count?: number }) => string,
): TableCellProps[] => {
  if (!data) {
    return emptyRow;
  }

  return [
    {
      children: (
        <DoubleLogoWithNames
          containerProps={{ sx: { justifyContent: 'flex-start', margin: '0 auto' } }}
          firstName={data.firstToken.name}
          secondName={data.secondToken.name}
          firstLogo={data.firstToken.imageUrl}
          secondLogo={data.secondToken.imageUrl}
        />
      ),
      key: 'token',
      align: 'center',
    },
    {
      children: <>{data.apr}</>,
      key: 'apr',
      align: 'center',
    },
    {
      children: <>{data.fee}</>,
      key: 'fee',
      align: 'center',
    },
    {
      children: <>{data.tvl}</>,
      key: 'tvl',
      align: 'center',
    },
    {
      children: (
        <LogoWithName
          containerProps={{
            sx: { justifyContent: 'flex-start', margin: '0 auto', width: 'fit-content' },
          }}
          name={data.platform.name}
          logo={data.platform.icon}
        />
      ),
      align: 'center',
      key: 'platform',
    },
    {
      children: (
        <LogoWithName
          containerProps={{
            sx: { justifyContent: 'flex-start', margin: '0 auto', width: 'fit-content' },
          }}
          name={data.chain.name}
          logo={data.chain.imageUrl}
        />
      ),
      align: 'center',
      key: 'chain',
    },
    {
      children: (
        <Link target="_blank" href={data.platform.link}>
          {t('actions.goTo')}
        </Link>
      ),
      key: 'action',
      align: 'center',
    },
  ];
};
