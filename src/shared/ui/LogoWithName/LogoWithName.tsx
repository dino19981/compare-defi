import React, { memo } from 'react';

import { Stack, StackProps, Typography } from '@mui/material';

import { StaticImageData } from 'next/image';
import { NOT_DEFINED_IMAGE_SRC_FROM_BACKEND } from 'shared/config';

import { ImageWithPlaceholder } from '../ImageWithPlaceholder';
import styles from './LogoWithName.module.scss';

interface Props {
  name?: string;

  logoSize?: number;
  logo?: string | StaticImageData;
  containerProps?: StackProps;
}

export const LogoWithName = memo(({ logo, name, containerProps, logoSize = 20 }: Props) => {
  const isLogoValid = !!logo && logo !== NOT_DEFINED_IMAGE_SRC_FROM_BACKEND;

  return (
    <Stack direction="row" alignItems="center" spacing={1} {...containerProps}>
      {logo && (
        <ImageWithPlaceholder
          isImageValid={isLogoValid}
          src={logo}
          alt={name || 'logo'}
          width={logoSize}
          height={logoSize}
          className={styles.image}
        />
      )}
      {name && <Typography variant="body2">{name}</Typography>}
    </Stack>
  );
});

LogoWithName.displayName = 'LogoWithName';
