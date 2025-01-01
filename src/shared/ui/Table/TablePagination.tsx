import React, { FC, memo } from 'react';

import { Pagination, PaginationProps, Stack } from '@mui/material';

export const TablePagination: FC<PaginationProps> = memo((props) => {
    return (
        <Stack alignItems="flex-end" paddingInline={10} paddingBlock={2}>
            <Pagination size="small" {...props} />
        </Stack>
    );
});

TablePagination.displayName = 'TablePagination';
