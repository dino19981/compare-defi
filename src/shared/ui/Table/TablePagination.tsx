import React, { FC, memo } from 'react';

import { Pagination, PaginationProps, Stack } from '@mui/material';

import classNames from 'classnames';
import { useTranslations } from 'next-intl';

import { Button } from '../Button';
import { Text } from '../Typography';
import styles from './Table.module.scss';

export const PER_PAGE_OPTIONS = [30, 50, 100, 150];

interface TablePaginationProps extends PaginationProps {
  rowsPerPage?: number;
  onRowsPerPageChange?: (rowsPerPage: number) => void;
  rowsPerPageOptions?: number[];
}

export const TablePagination: FC<TablePaginationProps> = memo((props) => {
  const t = useTranslations('pagination');

  const {
    rowsPerPage = PER_PAGE_OPTIONS[0],
    onRowsPerPageChange,
    rowsPerPageOptions = PER_PAGE_OPTIONS,
    ...paginationProps
  } = props;

  return (
    <Stack className={styles.pagination} alignItems="flex-end" paddingInline={10} paddingBlock={2}>
      <Pagination size="small" {...paginationProps} />

      <div className={styles.perPageContainer}>
        <Text>{t('show')}</Text>

        {rowsPerPageOptions.map((option) => (
          <Button
            key={option}
            value={option}
            size="small"
            variant="text"
            onClick={() => onRowsPerPageChange?.(option)}
            className={classNames(styles.perPageButton, {
              [styles.activePerPage]: option === rowsPerPage,
            })}
          >
            {option}
          </Button>
        ))}
      </div>
    </Stack>
  );
});

TablePagination.displayName = 'TablePagination';
