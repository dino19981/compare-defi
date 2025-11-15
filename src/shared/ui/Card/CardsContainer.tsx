import React from 'react';

import styles from './Card.module.scss';

interface Props {
  children: React.ReactNode;
}

export const CardsContainer = ({ children }: Props) => {
  return <div className={styles.cardsContainer}>{children}</div>;
};
