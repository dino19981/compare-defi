import { EarnItem } from 'shared/model/earn';

const ROWS_PER_PAGE = 10;

export const getVisibleRowsByPage = (data: EarnItem[], itemsCount: number, page: number) => {
    const rows = data.slice(page * ROWS_PER_PAGE, (page + 1) * ROWS_PER_PAGE);
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * ROWS_PER_PAGE - itemsCount) : 0;
    console.log(emptyRows, 'emptyRows', rows, 'rows');

    return rows.concat(Array(emptyRows).fill(undefined));
};
