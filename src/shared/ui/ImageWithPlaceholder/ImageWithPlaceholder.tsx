'use client';

import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

import React, { useState } from 'react';

import Image, { ImageProps } from 'next/image';

import { isAllowedImageDomain } from '../../lib/image/isAllowedImageDomain';

interface Props extends Omit<ImageProps, 'placeholder'> {
  isImageValid: boolean;
  placeholder?: React.ReactNode;
}

export const ImageWithPlaceholder = ({
  isImageValid,
  width,
  height,
  placeholder = <QuestionMarkIcon width={width} height={height} />,
  src,
  ...props
}: Props) => {
  const [hasError, setHasError] = useState(false);
  const isDomainAllowed = isAllowedImageDomain(src as string | undefined);

  if (hasError) {
    console.log('hasErrorhasErrorhasError ImageWithPlaceholder');
  }

  if (!isImageValid || hasError) {
    return placeholder;
  }

  // Если домен не разрешен, используем обычный img тег
  if (!isDomainAllowed && typeof src === 'string') {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={props.alt || ''}
        width={width}
        height={height}
        onError={() => setHasError(true)}
        style={{ width, height, objectFit: 'contain' }}
        className={props.className}
      />
    );
  }

  return (
    <Image
      width={width}
      height={height}
      src={src}
      {...props}
      onError={() => setHasError(true)}
      alt={props.alt || ''}
    />
  );
};
