import React, { memo } from 'react';

import { Stack, StackProps, Typography } from '@mui/material';

import classNames from 'classnames';
import { StaticImageData } from 'next/image';
import { NOT_DEFINED_IMAGE_SRC_FROM_BACKEND } from 'shared/config';

import { ImageWithPlaceholder } from '../ImageWithPlaceholder';
import styles from './DoubleLogoWithNames.module.scss';

interface Props {
  firstName?: string;
  secondName?: string;

  firstLogoSize?: number;
  secondLogoSize?: number;
  firstLogo?: string | StaticImageData;
  secondLogo?: string | StaticImageData;
  containerProps?: StackProps;
}

export const DoubleLogoWithNames = memo(
  ({
    firstLogo,
    secondLogo,
    firstName,
    secondName,
    containerProps,
    firstLogoSize = 28,
    secondLogoSize = 20,
  }: Props) => {
    const isFirstLogoValid = !!firstLogo && firstLogo !== NOT_DEFINED_IMAGE_SRC_FROM_BACKEND;
    const isSecondLogoValid = !!secondLogo && secondLogo !== NOT_DEFINED_IMAGE_SRC_FROM_BACKEND;

    return (
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        {...containerProps}
        className={classNames(styles.container, containerProps?.className)}
      >
        <div
          className={styles.logosContainer}
          style={{ width: firstLogoSize, height: firstLogoSize }}
        >
          {firstLogo && (
            <ImageWithPlaceholder
              isImageValid={isFirstLogoValid}
              src={firstLogo}
              alt="logo"
              width={firstLogoSize}
              height={firstLogoSize}
              className={styles.firstImage}
            />
          )}

          {secondLogo && (
            <ImageWithPlaceholder
              isImageValid={isSecondLogoValid}
              src={secondLogo}
              alt="logo"
              width={secondLogoSize}
              height={secondLogoSize}
              className={styles.secondImage}
            />
          )}
        </div>
        <Typography variant="body2">{`${firstName} / ${secondName}`}</Typography>
      </Stack>
    );
  },
);

DoubleLogoWithNames.displayName = 'DoubleLogoWithNames';
