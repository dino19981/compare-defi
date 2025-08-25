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
        <TableHead>
          <TableRow>
            {headCells.map((cell) => (
              <TableCell {...cell} key={cell.key} />
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {bodyRows.map((row, idx) => (
            <TableRow key={idx}>
              {row.map((cell) => (
                <TableCell {...cell} key={cell.key} />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MUITable>
    </TableContainer>
  );
};
