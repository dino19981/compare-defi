import { isDefined } from '../is-defined';

export const formatPercentage = (value: string | number | null | undefined): string | null => {
  if (!isDefined(value)) {
    return null;
  }

  return `${Number(value).toFixed(2)}%`;
};
