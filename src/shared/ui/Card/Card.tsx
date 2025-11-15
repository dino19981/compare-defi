'use client';

import React, { ReactNode } from 'react';

import { Chip } from '@mui/material';

import classNames from 'classnames';

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

  onClick?: () => void;
}

export const Card = ({ header, badges, children, footer, onClick }: Props) => {
  return (
    <div className={styles.card} onClick={onClick}>
      {header}
      {badges && (
        <div className={styles.badges}>
          {badges.map((badge) => (
            <Chip
              key={badge.text}
              label={badge.text}
              size="small"
              className={classNames(styles.badge, badge.className)}
            />
          ))}
        </div>
      )}
      <div className={styles.content}>{children}</div>
      {footer}
    </div>
  );
};
