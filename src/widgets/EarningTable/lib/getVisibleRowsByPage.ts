import { EarnItem } from 'entities/earn';

export const getVisibleRowsByPage = (
  data: EarnItem[],
  itemsCount: number,
  page: number,
  perPage: number,
) => {
  const rows = data.slice(page * perPage, (page + 1) * perPage);
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * perPage - itemsCount) : 0;

  return rows.concat(Array(emptyRows).fill(undefined));
};
