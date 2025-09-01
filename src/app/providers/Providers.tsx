import React, { FC, ReactNode } from 'react';

import { MuiProvider } from './MuiProvider';
import { ReactQueryProvider } from './ReactQueryProvider';

interface Props {
  children: ReactNode;
}

export const Providers: FC<Props> = ({ children }) => {
  return (
    <MuiProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </MuiProvider>
  );
};
