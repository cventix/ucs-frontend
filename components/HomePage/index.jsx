import React, { useEffect, useState } from 'react';
import homeStyles from '../../components/HomePage/home.module.scss';
import styles from '../../assets/styles/styles.webflow.module.scss';
import Button from '../../components/Infrastructure/Button';
import EditorCarousel from '../../components/HomePage/Editors';
import Podcasts from './Podcasts';
import Blogs from './Blogs';
import Thematic from './Thematic';
import Transformed from './Transformed';
import { useRouter } from 'next/router';
import DialogGallery from '../Hybrid/DialogGallery';

const HomeSections = ({ sectionData }) => {
  const router = useRouter();
  const { gallery } = router.query;
  const [openDialogGalley, setOpenDialogGalley] = useState(false);
  useEffect(() => {
    if (gallery) {
      setOpenDialogGalley(true);
    } else {
      setOpenDialogGalley(false);
    }
  }, [router]);

  return (
    <>
      <div className={`${homeStyles['hero']} wf-section`}>
        <div className={`${homeStyles['hero-wrapper']} ${homeStyles['trial']}`}>
          <div className={styles['_1200-container']}>
            <img
              src="images/603f6683f17e199e7e237545_603df7f309bc1080aae8a8f1_US China Series Logo_white.png"
              loading="lazy"
              alt="US-China Series logo"
              className={homeStyles['hero-logo']}
            />
            <h2 className={`${homeStyles['heading-copy']} ${homeStyles['hero']}`}>
              Live Interactive Investment Intelligence
            </h2>
            <p className={styles['paragraph-10']}>
              <strong className={styles['bold-text-6']}>
                US-China Series delivers a practical dialogue on the future of the most critical technology, investment,
                and geopolitical relationship of the 21st&nbsp;Century. With the help of over 240 China experts, we
                provide daily content and in-depth analysis on what drives your business, supply chain, and investments.
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
        {sectionData?.editorPicks?.length > 0 && <EditorCarousel data={sectionData?.editorPicks} />}
        {sectionData?.podcasts?.length > 0 && <Podcasts data={sectionData?.podcasts} />}
        {sectionData?.blogPosts?.length > 0 && <Blogs data={sectionData?.blogPosts} />}
        {sectionData?.thematics?.length > 0 && <Thematic data={sectionData?.thematics} />}
        {sectionData?.transformed?.length > 0 && <Transformed data={sectionData?.transformed} />}
        <Button className={`${homeStyles['signup-button']} w-inline-block`}>
          <div className={styles['text-block-25']}>Sign Up Today For Your Complimentary 30-Day Trial</div>
        </Button>
      </div>
      {openDialogGalley && <DialogGallery />}
    </>
  );
};
export default HomeSections;
