import { isDate } from 'date-fns';

import { SortOrder } from '../../model/SortOrder';
import { isDefined } from '../is-defined';
import { isNumber } from '../number';
import { isObject } from '../object';
import { isString } from '../string';

type SorterFn = (a: unknown, b: unknown) => number;

function internalSorter(sortOrder: SortOrder, sortKey?: string): SorterFn {
    return function compare(a: unknown, b: unknown) {
        let result: number;

        if (isNumber(a) && isNumber(b)) {
            result = a - b;
        } else if (isString(a) && isString(b)) {
            result = a.localeCompare(b);
        } else if (isDate(a) && isDate(b)) {
            result = (a as Date).valueOf() - (b as Date).valueOf();
        } else if (isObject(a) && isObject(b)) {
            if (!sortKey) {
                throw new Error('Sort key are not specified');
            }
            return compare(a[sortKey as keyof typeof a], b[sortKey as keyof typeof b]);
        } else {
            result = String(a) > String(b) ? 1 : String(a) < String(b) ? -1 : 0;
        }
        return result * sortOrder;
    };
}

export function sortArray<T>(array: Array<T>, sortOrder: SortOrder = SortOrder.Asc, sortKey?: keyof T | string) {
    if (!isDefined(array)) {
        return [];
    }

    const arrayClone = [...array];

    return arrayClone.sort(internalSorter(sortOrder, sortKey as string));
}
