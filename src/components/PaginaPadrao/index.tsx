import React from 'react';
import styles from './PaginaPadrao.module.scss';
import { Outlet } from 'react-router-dom';

export default function PaginaPadrao() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__img}>
          <div className={styles.header__text}>
            A casa do código e da massa.
          </div>
        </div>
      </header>
      <div>
        <Outlet/>
      </div>
    </>
  );
}
