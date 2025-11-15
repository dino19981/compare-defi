import React from 'react';

import { ButtonProps, Button as MuiButton } from '@mui/material';

import classNames from 'classnames';

import styles from './Button.module.scss';

export const Button = (props: ButtonProps) => {
  return <MuiButton {...props} className={classNames(styles.button, props.className)} />;
};
