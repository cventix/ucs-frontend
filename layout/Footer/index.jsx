import React from 'react';
import Link from 'next/link';
import footerStyles from './footer.module.scss';
import styles from '../../assets/styles/styles.webflow.module.scss';

function Footer() {
  return (
    <div className={`${styles['section-6']} wf-section`}>
      <div className={footerStyles['footer-wrapper']}>
        <div className={styles['_1200-container-3']}>
          <div className={`${styles['w-layout-grid']} ${styles['grid-3']}`}>
            <div className="footer-left">
              <div className={footerStyles['footer-heading']}>HOW CAN WE HELP?</div>
              <Link href="/old-home">
                <a className={`${footerStyles['link-footer']} w-inline-block`}>
                  <div className={styles['text-block-3']}>HOME</div>
                </a>
              </Link>
              <Link href="/who-we-are">
                <a className={footerStyles['link-footer'] + ' w-inline-block'}>
                  <div className={styles['text-block-3']}>WHO WE ARE</div>
                </a>
              </Link>
              <Link href="/what-we-do">
                <a className={footerStyles['link-footer'] + ' w-inline-block'}>
                  <div className={styles['text-block-3']}>WHAT WE DO</div>
                </a>
              </Link>
              <Link href="/our-events">
                <a className={footerStyles['link-footer'] + ' w-inline-block'}>
                  <div className={styles['text-block-3']}>OUR EVENTS</div>
                </a>
              </Link>
              <Link href="/work-with-us">
                <a className={footerStyles['link-footer'] + ' w-inline-block'}>
                  <div className={styles['text-block-3']}>WORK WITH US</div>
                </a>
              </Link>
            </div>
            <div id="w-node-_46add9f3-0030-ad83-ea9c-d69b84071f2b-84071f15" className={footerStyles['footer-mid']}>
              <img
                src="images/603df7f309bc103be0e8a8fb_icon.png"
                loading="lazy"
                width={132}
                alt=""
                className={styles['image']}
              />
            </div>
            <div id="w-node-_46add9f3-0030-ad83-ea9c-d69b84071f2d-84071f15" className={footerStyles['footer-right']}>
              <div className={footerStyles['footer-heading']}>CONTACT US</div>
              <div className={footerStyles['link-footer']}>
                <div className={styles['text-block-3'] + ' right'}>
                  <Link href="mailto:info@irantoptal.ir?subject=US%20Chine%20Series">
                    <a className={styles['link']}>info@irantoptal.ir</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={footerStyles['copyright-wrapper']}>
          <div className={styles['text-block-4']}>All rights reserved © 2021 by Iran Toptalent Series</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
