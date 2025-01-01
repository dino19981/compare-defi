import React, { FC, ReactNode } from 'react';

import { MuiProvider } from './MuiProvider';

interface Props {
    children: ReactNode;
}

export const Providers: FC<Props> = ({ children }) => {
    return <MuiProvider>{children}</MuiProvider>;
};
