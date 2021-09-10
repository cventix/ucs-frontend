import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import style from './EventItem.module.scss';

const EventItem = ({ title, description, speakers, link }) => {
  return (
    <Fragment>
      <div className={style.Container}>
        <div className={style.Header}>
          <h2 className={style.Title}>{title}</h2>
          <ul className={style.Schedule}>
            <li>
              September 13, 8:00 PM <span>SGT</span>
            </li>
            <li>
              September 13, 8:00 PM <span>SGT</span>
            </li>
            <li>
              September 13, 8:00 PM <span>SGT</span>
            </li>
          </ul>
        </div>
        <p className={style.Description}>{description}</p>
        <div className={style.Speakers}>
          <h3 className={style.Title}>SPEAKERS</h3>
          <div className={style.SpeakerItems}>
            {speakers.map((item, index) => (
              <div className={style.SpeakerItem} key={index}>
                <Image src={item.image} width={220} height={220} />
                <h2 className={style.SpeakerName}>{item.name}</h2>
                <p className={style.SpeakerDescription}>{item.bio}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <a href={link} className={style.RegisterLink}>
            Register Now
          </a>
        </div>
      </div>
    </Fragment>
  );
};

EventItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  speakers: PropTypes.array,
  link: PropTypes.string,
};

EventItem.defaultProps = {
  title: '',
  description: '',
  speakers: [],
  link: '',
};

export default EventItem;
