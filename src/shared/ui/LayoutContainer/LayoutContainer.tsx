import React from 'react';

import styles from './LayoutContainer.module.scss';

interface Props {
  children: React.ReactNode;
}

export const LayoutContainer = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};
