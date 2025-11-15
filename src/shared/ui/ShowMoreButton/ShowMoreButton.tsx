import React from 'react';

import { ButtonProps } from '@mui/material';

import classNames from 'classnames';
import { useTranslations } from 'next-intl';

import { Button } from '../Button';
import styles from './ShowMoreButton.module.scss';

interface Props extends ButtonProps {
  containerClassName?: string;
}

export const ShowMoreButton = (props: Props) => {
  const t = useTranslations('pagination');

  const { containerClassName, ...buttonProps } = props;

  return (
    <div className={classNames(styles.container, containerClassName)}>
      <Button {...buttonProps}>{t('showMore')}</Button>
    </div>
  );
};
