import React from 'react';

import styles from './CardContentItem.module.scss';

interface Props {
  title: string;
  value: string;
}

export const CardContentItem = ({ title, value }: Props) => {
  return (
    <div className={styles.cardContentItem}>
      <p className={styles.title}>{title}</p>
      <p className={styles.value}>{value}</p>
    </div>
  );
};
