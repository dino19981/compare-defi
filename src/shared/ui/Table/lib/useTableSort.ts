import { useMemo, useState } from 'react';

import { sortArray } from 'shared/lib/array';
import { SortOrder } from 'shared/model/SortOrder';

// interface Props<T extends object> {
//     cells: T[];
// }

export const useTableSort = <T extends object>(data: T[]) => {
    const [order, setOrder] = useState<SortOrder>(SortOrder.Asc);
    const [orderBy, setOrderBy] = useState<keyof T>();

    const sortedData = useMemo(() => {
        if (!orderBy) return data;

        return sortArray(data, order, orderBy);
    }, [order, orderBy, data]);

    const onChangeSort = (_: React.MouseEvent<unknown>, property: keyof T) => {
        const isAsc = orderBy === property && order === SortOrder.Asc;
        setOrder(isAsc ? SortOrder.Desc : SortOrder.Asc);
        setOrderBy(property);
    };

    return {
        sortedData,
        setOrder,
        setOrderBy,
        onChangeSort,
    };
};
