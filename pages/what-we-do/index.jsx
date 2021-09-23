import React, { Fragment } from 'react';
import Image from 'next/image';
import Layout from '../../layout';
import Testimonial from '../../components/Testimonial';
import style from './WhatWeDo.module.scss';
import Carousel from '../../components/Hybrid/Carousel';
import { settings, items } from './carouselItems';

const WhatWeDo = () => {
  return (
    <Fragment>
      <Layout>
        <div className={style.Container}>
          <div className={style.Header}>
            <div className={style.HeaderContent}>
              <h1 className={style.Title}>What We Do</h1>
              <p className={style.Description}>
                US-China Series was built on the recognition that a continuation of the current mood and rhetoric would
                not lead to mutually beneficial outcomes.
              </p>
            </div>
          </div>
          <div className={style.DescriptionSection}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <p className={style.FounderDescription}>
                    The future of the most important relationship of the 21st century is not limited to the Washington
                    Beltway. Business leaders, policy makers, institutional investors and academics from across the
                    country are joining the US-China Series – all have a strong vested interest in solving critical
                    issues.
                    <br />
                    <br />
                    One of the causes of this contention is a misunderstanding of the objectives of both sides. Only
                    with dialogue and participation from all vested interests can both sides get a genuine appreciation
                    of each others intentions. These conversations can be uncomfortable, but they are necessary for us
                    to develop a framework to deal with the challenges of the years ahead.
                    <br />
                    <br />
                    This isn’t an intellectual exercise. This is about solutions for business and policy prescriptions
                    for government.
                    <br />
                    <br />
                    With the promotion of gender, geographical, and ethnic inclusion, we are scratching the surface of
                    what diverse thinking can achieve.
                  </p>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <Image src="/images/text.png" width={470} height={446} layout="responsive" />
                </div>
              </div>
            </div>
          </div>
          <div className={style.EventSection}>
            <Carousel
              settings={settings}
              title="Our Events"
              carouselClassName={style['single-item-carousel']}
              titleClassName={style['our-events']}
              items={items}
              itemClassName="single-slide"
              hoverActionType="none"
              linkType="single-video-slide"
            />
          </div>
          <div className={style.Testimonial}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <Testimonial
                    title="Testimonial"
                    description="The US China Series makes an invaluable contribution to the evolving conversation on this most consequential of bilateral relationships. The quality and range of participants, the careful attention to diversity, and the seamless organization of the events combine to make for one of the best China-focused conferences running. Kudos to the conveners!"
                    writer="KAISER KOU"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default WhatWeDo;
