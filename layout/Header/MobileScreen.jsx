import React from 'react';
import Link from 'next/link';
import styles from '../../assets/styles/styles.webflow.module.scss';
import mobileStyles from './mobile.header.module.scss';

function MobileScreen() {
  return (
    <div className={`${styles['section-2']} wf-section`}>
      <div className={mobileStyles['mobile-nav-wrapper-trial']}>
        <div className={styles['_1200-container-2']}>
          <div className={mobileStyles['nav-mobile-flex']}>
            <div className="logo-nav-wrap-mob">
              <img
                src="images/603df7f309bc103be0e8a8fb_icon.png"
                loading="lazy"
                width={49}
                alt=""
                className="ir-china-logo-nav"
              />
            </div>
            <div className={styles['div-block-35']}>
              <a href="#" className={`${styles['login-btn-3']} ${styles['sm-login-btn']} w-button`}>
                Login
              </a>
              <div data-w-id="1e125eb7-3e97-b009-3cab-31388710a2c5" className={styles['menu-button-wrap']}>
                <div
                  data-w-id="1e125eb7-3e97-b009-3cab-31388710a2c6"
                  data-animation-type="lottie"
                  data-src="https://uploads-ssl.webflow.com/60ff4f90476c7d7881e2027f/60ff4f90476c7d836be202c1_9789-burger-menu.json"
                  data-loop={0}
                  data-direction={1}
                  data-autoplay={0}
                  data-is-ix2-target={1}
                  data-renderer="svg"
                  data-default-duration={3}
                  data-duration={3}
                  data-ix2-initial-state={0}
                  className={styles['lottie-animation-2']}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={mobileStyles['full-screen-menu']}>
        <div className={mobileStyles['menu-content-wrap']}>
          <Link href="/">
            <a className={`${mobileStyles['mob-menu-item']} w--current w-inline-block `}>
              <div className={styles['text-block-9']}>HOME</div>
            </a>
          </Link>
          <Link href="/who-we-are">
            <a className={`${mobileStyles['mob-menu-item']} w-inline-block `}>
              <div className={styles['text-block-9']}>WHO WE ARE</div>
            </a>
          </Link>
          <Link href="/what-we-do">
            <a className={`${mobileStyles['mob-menu-item']} w-inline-block `}>
              <div className={styles['text-block-9']}>WHAT WE DO</div>
            </a>
          </Link>
          <Link href="/our-events">
            <a className={`${mobileStyles['mob-menu-item']} w-inline-block `}>
              <div className={styles['text-block-9']}>OUR EVENTS</div>
            </a>
          </Link>
          <Link href="/work-with-us">
            <a className={`${mobileStyles['mob-menu-item']} w-inline-block `}>
              <div className={styles['text-block-9']}>WORK WITH US</div>
            </a>
          </Link>
          <Link href="/sign-up/founding-members">
            <a className={`${styles['button']} ${styles['nav-button']} w-inline-block`}>
              <div className={`${styles['text-block']} ${styles['button-text']} ${styles['nav-button-text']}`}>
                Start your free 14-day trial
              </div>
            </a>
          </Link>
        </div>
        <div data-w-id="f64c3381-7d0f-f43e-abc3-8fd2a42f86cd" className={mobileStyles['menu-button-close']}>
          <div
            data-w-id="f64c3381-7d0f-f43e-abc3-8fd2a42f86ce"
            data-animation-type="lottie"
            data-src="documents/9789-burger-menu.json"
            data-loop={0}
            data-direction={1}
            data-autoplay={0}
            data-is-ix2-target={1}
            data-renderer="svg"
            data-default-duration={3}
            data-duration={3}
            data-ix2-initial-state={50}
            className={styles['close-lottie']}
          />
        </div>
        {/* <div className="mobile-nav-wrapper-2">
          <div className="_1200-container-2">
            <div className="nav-mobile-flex">
              <div className="logo-nav-wrap-mob">
                <img
                  src="images/603df7f309bc103be0e8a8fb_icon.png"
                  loading="lazy"
                  width={49}
                  alt=""
                  className="ir-china-logo-nav"
                />
              </div>
              <div className="div-block-35">
                <a href="#" className="login-btn-3 sm-login-btn w-button">
                  Login
                </a>
                <div data-w-id="f48b00a3-ef6e-f452-84f9-b1d2949e37a2" className="menu-button-wrap">
                  <div
                    data-w-id="f48b00a3-ef6e-f452-84f9-b1d2949e37a3"
                    data-animation-type="lottie"
                    data-src="https://uploads-ssl.webflow.com/60ff4f90476c7d7881e2027f/60ff4f90476c7d836be202c1_9789-burger-menu.json"
                    data-loop={0}
                    data-direction={1}
                    data-autoplay={0}
                    data-is-ix2-target={1}
                    data-renderer="svg"
                    data-default-duration={3}
                    data-duration={3}
                    data-ix2-initial-state={0}
                    className="lottie-animation-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
       */}
      </div>
    </div>
  );
}

export default MobileScreen;
