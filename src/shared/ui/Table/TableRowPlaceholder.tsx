import React from 'react';

import { Skeleton } from '@mui/material';

import styles from './Table.module.scss';

export const TableRowPlaceholder = () => {
  return (
    <div className={styles.rowPlaceholderContainer}>
      <Skeleton height={60} />
    </div>
  );
};
