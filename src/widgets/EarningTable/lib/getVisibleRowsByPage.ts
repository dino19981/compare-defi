import { EarnItem } from 'shared/model/earn';

const ROWS_PER_PAGE = 10;

export const getVisibleRowsByPage = (data: EarnItem[], page: number) => {
    return data.slice(page * ROWS_PER_PAGE, (page + 1) * ROWS_PER_PAGE);
};
