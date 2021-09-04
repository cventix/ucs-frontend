import React from 'react';
import headerStyles from './header.module.scss';
import styles from '../../assets/styles/styles.webflow.module.scss';
import Navbar from '../../components/Navbar';
import logoPng from '../../assets/images/603df7f309bc103be0e8a8fb_icon.png';
const Header = () => {
  return (
    <div className={`${styles['section']} wf-section`}>
      <div className={headerStyles['navigation-desktop-wrapper']}>
        <div className={styles['_1200-container']}>
          <div className={headerStyles['navigation-desktop-content-flex']}>
            <div className={headerStyles['navigation-desktop-left-wrap']}>
              <img src={logoPng} width={49} alt="logo" className="ir-china-logo-nav" />
            </div>
            <Navbar className={headerStyles['navigation-right-wrap']} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
