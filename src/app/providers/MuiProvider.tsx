'use client';

import React, { FC, ReactNode } from 'react';

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

interface Props {
  children: ReactNode;
}

export const MuiProvider: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppRouterCacheProvider options={{ key: 'css' }}>{children}</AppRouterCacheProvider>
    </ThemeProvider>
  );
};
