import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../assets/styles/styles.webflow.module.scss';
import mobileStyles from './mobile.header.module.scss';
import Login from '../../components/Hybrid/Login';

function MobileScreen() {
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  const [isOpenedLogin, setIsOpenedLogin] = useState(false);
  return (
    <>
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
                <a
                  role="button"
                  tabIndex={0}
                  className={`${styles['login-btn-3']} ${styles['sm-login-btn']} w-button`}
                  onClick={() => {
                    setIsOpenedLogin(true);
                  }}
                >
                  Login
                </a>
                <div
                  role="button"
                  tabIndex={0}
                  id="hamburger"
                  onClick={() => {
                    setIsOpenBurger(!isOpenBurger);
                  }}
                  className={`${mobileStyles['hamburglar']} ${
                    isOpenBurger ? mobileStyles['is-open'] : mobileStyles['is-closed']
                  }`}
                >
                  <div className={mobileStyles['burger-icon']}>
                    <div className={mobileStyles['burger-container']}>
                      <span className={mobileStyles['burger-bun-top']} />
                      <span className={mobileStyles['burger-filling']} />
                      <span className={mobileStyles['burger-bun-bot']} />
                    </div>
                  </div>
                  {/* svg ring containter */}
                  <div className={mobileStyles['burger-ring']}>
                    <svg className={mobileStyles['svg-ring']}>
                      <path
                        className="path"
                        fill="none"
                        stroke="#fff"
                        strokeMiterlimit={10}
                        strokeWidth={4}
                        d="M 34 2 C 16.3 2 2 16.3 2 34 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 34 2"
                      />
                    </svg>
                  </div>
                  {/* the masked path that animates the fill to the ring */}
                  <svg width={0} height={0}>
                    <mask id="mask">
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="#ff0000"
                        strokeMiterlimit={10}
                        strokeWidth={4}
                        d="M 34 2 c 11.6 0 21.8 6.2 27.4 15.5 c 2.9 4.8 5 16.5 -9.4 16.5 h -4"
                      />
                    </mask>
                  </svg>
                  <div className={mobileStyles['path-burger']}>
                    <div className={mobileStyles['animate-path']}>
                      <div className={mobileStyles['path-rotation']} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${mobileStyles['full-screen-menu']} ${isOpenBurger && mobileStyles['show-menu']}`}>
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
        </div>
      </div>
      {isOpenedLogin && <Login closeHandler={setIsOpenedLogin} />}
    </>
  );
}

export default MobileScreen;
