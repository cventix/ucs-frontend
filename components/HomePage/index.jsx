import React from 'react';
import homeStyles from '../../components/HomePage/home.module.scss';
import styles from '../../assets/styles/styles.webflow.module.scss';
import Button from '../../components/Infrastructure/Button';
import EditorCarousel from '../../components/HomePage/Editors';

const HomeSections = () => {
  return (
    <>
      <div className={`${homeStyles['hero']} wf-section`}>
        <div className={`${homeStyles['hero-wrapper']} ${homeStyles['trial']}`}>
          <div className={styles['_1200-container']}>
            <img
              src="images/603df7f309bc103be0e8a8fb_icon.png"
              loading="lazy"
              alt="Irantoptal Series logo"
              className={homeStyles['hero-logo']}
            />
            <h2 className={`${homeStyles['heading-copy']} ${homeStyles['hero']}`}>
              Live Interactive Investment Intelligence
            </h2>
            <p className={styles['paragraph-10']}>
              <strong className={styles['bold-text-6']}>
                Irantoptal Series delivers a practical dialogue on the future of the most critical technology,
                investment, and geopolitical relationship of the 21st&nbsp;Century. With the help of over 240 China
                experts, we provide daily content and in-depth analysis on what drives your business, supply chain, and
                investments.
                <br />
                <br />
                The premium service provides unlimited access to live events, premium video and podcast libraries,
                proprietary reports, founder blogs, and more.
              </strong>
            </p>
            <Button className={`${homeStyles['signup-button']} w-inline-block btn btn-primary`}>
              <div className={styles['text-block-25']}>Sign Up Today For Your Complimentary 30-Day Trial</div>
            </Button>
          </div>
          <div className={homeStyles['bg-video-wrapper']}>
            <div
              data-poster-url="https://uploads-ssl.webflow.com/603f65bbdde9bc8bf9ac07f0/603f6acd460be22af08cd293_603df7f309bc1094eae8a8fc_Digital Globe-poster-00001.jpg"
              data-video-urls="https://uploads-ssl.webflow.com/603f65bbdde9bc8bf9ac07f0/603f6acd460be22af08cd293_603df7f309bc1094eae8a8fc_Digital Globe-transcode.mp4,https://uploads-ssl.webflow.com/603f65bbdde9bc8bf9ac07f0/603f6acd460be22af08cd293_603df7f309bc1094eae8a8fc_Digital Globe-transcode.webm"
              data-autoplay="true"
              data-loop="true"
              data-wf-ignore="true"
              className={`${homeStyles['background-video']} ${homeStyles['trial']} w-background-video w-background-video-atom`}
            >
              <video
                autoPlay
                loop
                style={{
                  backgroundImage:
                    'url("https://uploads-ssl.webflow.com/603f65bbdde9bc8bf9ac07f0/603f6acd460be22af08cd293_603df7f309bc1094eae8a8fc_Digital Globe-poster-00001.jpg")',
                }}
                muted
                playsInline
                data-wf-ignore="true"
                data-object-fit="cover"
              >
                <source
                  src="https://uploads-ssl.webflow.com/603f65bbdde9bc8bf9ac07f0/603f6acd460be22af08cd293_603df7f309bc1094eae8a8fc_Digital Globe-transcode.mp4"
                  data-wf-ignore="true"
                />
                <source
                  src="https://uploads-ssl.webflow.com/603f65bbdde9bc8bf9ac07f0/603f6acd460be22af08cd293_603df7f309bc1094eae8a8fc_Digital Globe-transcode.webm"
                  data-wf-ignore="true"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className={homeStyles['bg-wrapper']}>
        <EditorCarousel />
        <Button className={`${homeStyles['signup-button']} w-inline-block`}>
          <div className={styles['text-block-25']}>Sign Up Today For Your Complimentary 30-Day Trial</div>
        </Button>
      </div>
    </>
  );
};
export default HomeSections;
