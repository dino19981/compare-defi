import ViewCozyIcon from '@mui/icons-material/ViewCozy';
import ViewListIcon from '@mui/icons-material/ViewList';

import React from 'react';

import { IconButton } from '@mui/material';

import classNames from 'classnames';

import { BaseView } from '../types';
import styles from './CardTableToggler.module.scss';

export const VIEW_LOCALSTORAGE_KEY = 'view';

interface Props {
  view: BaseView;
  setView: (view: BaseView) => void;

  configName: string;
}

export const CardTableToggler = ({ view, setView, configName }: Props) => {
  const isCardView = view === BaseView.Card;

  const onChangeView = (view: BaseView) => {
    setView(view);

    const config = localStorage.getItem(configName);

    if (config) {
      const configObj = JSON.parse(config);
      configObj[VIEW_LOCALSTORAGE_KEY] = view;

      console.log('set new view', configObj);

      localStorage.setItem(configName, JSON.stringify(configObj));
    } else {
      localStorage.setItem(configName, JSON.stringify({ [VIEW_LOCALSTORAGE_KEY]: view }));
    }
  };

  return (
    <div className={styles.container}>
      <IconButton
        className={classNames(styles.button, {
          [styles.active]: isCardView,
        })}
        size="small"
        onClick={() => onChangeView(BaseView.Card)}
      >
        <ViewCozyIcon />
      </IconButton>

      <IconButton
        className={classNames(styles.button, {
          [styles.active]: !isCardView,
        })}
        size="small"
        onClick={() => onChangeView(BaseView.Table)}
      >
        <ViewListIcon />
      </IconButton>
    </div>
  );
};
