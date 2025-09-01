'use client';

import React, { ReactNode } from 'react';

import { Chip } from '@mui/material';

import styles from './Card.module.scss';

interface Badge {
  text: string;
  className?: string;
}

interface Props {
  header: ReactNode;
  badges?: Badge[];
  children: ReactNode;
  footer: ReactNode;
}

export const Card = ({ header, badges, children, footer }: Props) => {
  return (
    <div className={styles.card}>
      {header}
      {badges && (
        <div className={styles.badge}>
          {badges.map((badge) => (
            <Chip key={badge.text} label={badge.text} size="small" className={badge.className} />
          ))}
        </div>
      )}
      <div className={styles.content}>{children}</div>
      {footer}
    </div>
  );
};
