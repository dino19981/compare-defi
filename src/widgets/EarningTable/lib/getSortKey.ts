import { EarnItem } from 'entities/earn';

export const getSortKey = (orderBy: string) => {
  return (item: unknown) => {
    const _item = item as EarnItem;

    switch (orderBy) {
      case 'token':
        return _item.token.name;
      case 'rates':
        return _item.maxRate;
      case 'platform':
        return _item.platform.name;
      default:
        return 0;
    }
  };
};
