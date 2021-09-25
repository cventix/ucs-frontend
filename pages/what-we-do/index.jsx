import React, { Fragment } from 'react';
import Image from 'next/image';
import Layout from '../../layout';
import Testimonial from '../../components/Testimonial';
import style from './WhatWeDo.module.scss';
import Carousel from '../../components/Hybrid/Carousel';

const items = [
  {
    id: 1,
    src: '//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F512571612%3Fapp_id%3D122963&dntp=1&display_name=Vimeo&url=https%3A%2F%2Fvimeo.com%2F512571612%2Fcb9b10942b&image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1061330458_1280.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=vimeo',
    title: 'The Chinese Electric Vehicle Market',
    description: `The future of the automobile industry will be electric, and China dominates both manufacturing and adoption. Tesla's domestic production capability shows that China will be the epicenter of global EV competition. When combined with stratospheric valuations, few would argue that the Chinese EV sector isn't one of the hottest corporate stories of the new decade. What does China's dominance mean for the future of the electric vehicle industry?`,
  },
  {
    id: 2,
    src: '//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F505386884%3Fapp_id%3D122963&dntp=1&display_name=Vimeo&url=https%3A%2F%2Fvimeo.com%2F505386884%2Fd17b561d84&image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1045841792_1280.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=vimeo',
    title: 'Chinese Data Centers',
    description: `Data is the new oil, and the new oil needs storage containers. If you drive an electric car for one hour, it produces approximately four terabytes of new data. Data that's being created from image recognition, IoT devices, and the e-commerce revolution and it all needs to be stored. China's data center sector is different from the US in several ways—Telecom is dominant, the consumer vs. enterprises has driven the technology boom, there are numerous regulatory barriers to entry, and China is at an early stage of development compared to the US. That said, China's data center market has tripled since 2015 and shows no signs of slowing down.`,
  },
  {
    id: 3,
    src: '//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F492358625%3Fapp_id%3D122963&dntp=1&display_name=Vimeo&url=https%3A%2F%2Fvimeo.com%2F492358625%2F6f54f58db9&image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1018132652_1280.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=vimeo',
    title: 'Year In Review',
    description: `2020 was an unpredictable year for the US-China relationship. It ended with a new American President, the implementation of a new trade deal, and an upheaval of the global economy due to COVID-19. China has the upper hand economically with its handling of the pandemic, yet is dealing with the fallout of the trade dispute and the vulnerabilities generated by the semiconductor embargo, Hong Kong, Xinjiang, and its regulatory clampdown on its technology giants. Crosscurrents abound as the Biden administration formulates its strategy on how to manage growing Chinese influence. Our panelists provided their analysis and insights on the impact of 2020 on the future of the US-China economic, technology, investment, and geopolitical relationship.`,
  },
  {
    id: 4,
    src: '//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F511406698%3Fapp_id%3D122963&dntp=1&display_name=Vimeo&url=https%3A%2F%2Fvimeo.com%2F511406698%2Fba042a8225&image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1058599881_1280.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=vimeo',
    title: 'Chinese Fintech',
    description: `China has leapfrogged the United States to become the undisputed global fintech hub. The speed, sophistication, and scale of China's fintech development is unmatched and attributed to Its high national mobile internet penetration, a large e-commerce ecosystem, its dominant mega-tech companies, and traditionally accommodative regulations. Since the Ant Financial clampdown, Chinese authorities are exploring ways to tighten regulation. Will stricter regulations hinder China's fintech sector growth?`,
  },
  {
    id: 5,
    src: '//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F507771781%3Fapp_id%3D122963&dntp=1&display_name=Vimeo&url=https%3A%2F%2Fvimeo.com%2F507771781%2F071d0ae13e&image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1050946181_1280.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=vimeo',
    title: 'The Strategic Implications of the China EU Investment Deal',
    description: `Towards the end of 2020, the European Union and China concluded negotiations for the Comprehensive Agreement on Investment (CAI). This deal strengthens ties between Beijing and Brussels at a pivotal moment for the Biden administration, which is indicating that the United States will end unilateralism and seek a united front with the EU, Japan, and other democratic allies in its trade fight with China. The CAI has potentially halted that opportunity.`,
  },
];

const settings = {
  dots: true,
  infinite: false,
  arrow: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

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
