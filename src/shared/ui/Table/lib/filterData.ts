import { get } from 'lodash';

export const filterData = <T extends object>(
  data: T[],
  filters: Partial<Record<string, string[]>>,
) => {
  if (Object.keys(filters).length === 0) return data;

  return data.filter((item) => {
    return Object.keys(filters).every((key) => {
      if (filters?.[key]?.length === 0) return true;

      const value = get(item, key);

      return filters[key]?.includes(value);
    });
  });
};
