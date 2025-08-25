import { isDefined } from '../is-defined';

export function findMinMax<T>(array: T[], key?: never): [T, T] | [undefined, undefined];
export function findMinMax<T extends object, K extends keyof T>(
  array: T[],
  key: K,
): [T[K], T[K]] | [undefined, undefined];
export function findMinMax<T, K extends keyof T>(
  array: T[],
  key?: K,
): K extends undefined ? [T, T] | [undefined, undefined] : [T[K], T[K]] | [undefined, undefined] {
  if (!array?.length) {
    return [undefined, undefined] as K extends undefined
      ? [T, T] | [undefined, undefined]
      : [T[K], T[K]] | [undefined, undefined];
  }

  return array.reduce(
    (acc, current) => {
      const value = (key ? current[key] : current) as K extends undefined ? T : T[K];
      if (isDefined(value)) {
        acc[0] = acc[0] === undefined || value < (acc[0] as T[K]) ? value : acc[0];
        acc[1] = acc[1] === undefined || value > (acc[1] as T[K]) ? value : acc[1];
      }
      return acc;
    },
    [] as unknown as K extends undefined ? [T, T] : [T[K], T[K]],
  );
}
