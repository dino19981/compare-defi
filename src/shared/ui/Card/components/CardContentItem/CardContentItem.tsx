import React, { ReactNode } from 'react';

import styles from './CardContentItem.module.scss';

interface Props {
  title: string;
  value: ReactNode;
}

export const CardContentItem = ({ title, value }: Props) => {
  return (
    <div className={styles.cardContentItem}>
      <p className={styles.title}>{title}</p>
      {typeof value === 'string' ? <p className={styles.value}>{value}</p> : value}
    </div>
  );
};
