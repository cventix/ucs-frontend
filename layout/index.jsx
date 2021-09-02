import React from 'react';
import styles from '../assets/styles/styles.webflow.module.scss';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className={styles['section'] + ' wf-section'}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
