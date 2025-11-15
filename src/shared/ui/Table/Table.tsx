import React from 'react';

import {
  Table as MUITable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableCellProps as _TableCellProps,
} from '@mui/material';

import styles from './Table.module.scss';

export interface TableCellProps extends _TableCellProps {
  key: string | number;
}

interface Props {
  headCells: TableCellProps[];
  bodyRows: TableCellProps[][];
}

export const Table = ({ headCells, bodyRows }: Props) => {
  return (
    <TableContainer>
      <MUITable size="small">
        <TableHead className={styles.tableHead}>
          <TableRow>
            {headCells.map((cell, index) => (
              <TableCell
                {...cell}
                key={cell.key}
                className={index === 0 ? styles.firstColumn : undefined}
              />
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {bodyRows.map((row, idx) => (
            <TableRow key={idx}>
              {row.map((cell, cellIndex) => (
                <TableCell
                  {...cell}
                  key={cell.key}
                  className={`${styles.tableCell} ${cellIndex === 0 ? styles.firstColumn : ''}`}
                />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MUITable>
    </TableContainer>
  );
};
