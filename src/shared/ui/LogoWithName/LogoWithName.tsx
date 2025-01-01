import React, { memo } from 'react';

import { Stack, StackProps, Typography } from '@mui/material';

import Image from 'next/image';

interface Props {
    name?: string;

    logoSize?: number;
    logo?: string;
    containerProps?: StackProps;
}

export const LogoWithName = memo(({ logo, name, containerProps, logoSize = 20 }: Props) => {
    return (
        <Stack direction="row" spacing={1} {...containerProps}>
            {logo && <Image src={logo} alt="logo" width={logoSize} height={logoSize} />}
            {name && <Typography variant="body2">{name}</Typography>}
        </Stack>
    );
});

LogoWithName.displayName = 'LogoWithName';
