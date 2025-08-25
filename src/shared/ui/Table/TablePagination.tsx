import React, { FC, memo } from 'react';

import {
  Box,
  InputLabel,
  MenuItem,
  Pagination,
  PaginationProps,
  Select,
  SelectChangeEvent,
  Stack,
} from '@mui/material';

import { useTranslations } from 'next-intl';

interface TablePaginationProps extends PaginationProps {
  rowsPerPage?: number;
  onRowsPerPageChange?: (rowsPerPage: number) => void;
  rowsPerPageOptions?: number[];
}

export const TablePagination: FC<TablePaginationProps> = memo((props) => {
  const t = useTranslations('pagination');

  const {
    rowsPerPage = 10,
    onRowsPerPageChange,
    rowsPerPageOptions = [5, 10, 20, 30, 40, 50],
    ...paginationProps
  } = props;

  const handleRowsPerPageChange = (event: SelectChangeEvent<number>) => {
    onRowsPerPageChange?.(event.target.value as number);
  };

  return (
    <Stack alignItems="flex-end" paddingInline={10} paddingBlock={2}>
      <Box display="flex" alignItems="center" gap={2}>
        <InputLabel>{t('rowsPerPage')}</InputLabel>
        <Select
          size="small"
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
          variant="outlined"
          sx={{
            minWidth: 50,
          }}
        >
          {rowsPerPageOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>

        <Pagination size="small" {...paginationProps} />
      </Box>
    </Stack>
  );
});

TablePagination.displayName = 'TablePagination';
