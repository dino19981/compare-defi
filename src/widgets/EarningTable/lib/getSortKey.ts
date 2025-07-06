import { EarnItem } from 'shared/model/earn';

export const getSortKey = (orderBy: string) => {
    return (item: unknown) => {
        const _item = item as EarnItem;

        switch (orderBy) {
            case 'token':
                return _item.token.name;
            case 'rates':
                return _item.rates[0].currentApy;
            case 'platform':
                return _item.platform.name;
            default:
                return 0;
        }
    };
};
