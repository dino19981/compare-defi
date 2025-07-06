import { useMemo, useState } from 'react';

import { sortArray } from 'shared/lib/array';
import { SortOrder } from 'shared/model/SortOrder';

interface Props<T extends object> {
    data: T[];
    defaultOrderBy?: string;
    getSortKey?: (orderBy: string) => (a: unknown) => string | number;
}

export const useTableSort = <T extends object>({ data, defaultOrderBy, getSortKey }: Props<T>) => {
    const [order, setOrder] = useState<SortOrder>(SortOrder.Desc);
    const [orderBy, setOrderBy] = useState<string | undefined>(defaultOrderBy);

    const sortedData = useMemo(() => {
        if (!orderBy) return data;

        const _orderBy = getSortKey ? undefined : orderBy;

        return sortArray(data, order, _orderBy, getSortKey?.(orderBy));
    }, [order, orderBy, data]);

    const onChangeSort = (_: React.MouseEvent<unknown>, property: string) => {
        const isAsc = orderBy === property && order === SortOrder.Asc;
        setOrder(isAsc ? SortOrder.Desc : SortOrder.Asc);
        setOrderBy(property);
    };

    return {
        order,
        orderBy,
        sortedData,
        setOrder,
        setOrderBy,
        onChangeSort,
    };
};
