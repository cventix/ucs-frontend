import React, { Fragment } from 'react';
import Layout from '../../layout';
import EventItem from '../../components/Events/Item';
import style from './OurEvents.module.scss';

const events = [
  {
    title: 'The Status of Chinese Foreign Listings',
    description:
      'The post-Didi clampdown on Chinese firms wishing to list abroad has darkened an already murky picture for Chinese IPOs. ByteDance is but one company caught up in this mix and with the SEC demanding greater transparency, the future for new and existing listings must be questioned. Paul Gillis is a Professor at Guanghua School of Management, Peking University in Beijing, where he has become a global authority on Chinese accounting standards and legal structures',
    speakers: [
      {
        image: '/images/Matt-Krake.jpeg',
        name: 'Paul Gillis',
        bio: 'Professor of Practice and Co-Director, IMBA program at Peking University',
      },
    ],
    link: '#',
  },
];

const OurEvents = () => {
  return (
    <Fragment>
      <Layout>
        <div className={style.Container}>
          <div className={style.Header}>
            <div className={style.HeaderContent}>
              <h1 className={style.Title}>Upcoming Events</h1>
              <p className={style.Description}>
                Join business leaders, investors, academics and members of government to forge a deeper and long-lasting
                understanding of how two different economic and political models can see through their differences for
                the benefit of the world at large.
              </p>
            </div>
          </div>
          <div className={style.EventSection}>
            <div className="container">
              <div className="row">
                <div className="Col-12">
                  {events.map((item, index) => (
                    <EventItem
                      key={index}
                      title={item.title}
                      description={item.description}
                      link={item.link}
                      speakers={item.speakers}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default OurEvents;
