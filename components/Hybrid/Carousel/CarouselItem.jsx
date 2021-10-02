import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import style from './carousel.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const CarouselItem = (props) => {
  const { img, title, description, hoverActionType, itemClassName, link, linkType } = props;

  const imageClassNameHandler = () => {
    switch (hoverActionType) {
      case 'scaleButton':
        return `${style['image-scale-holder']} ${style[itemClassName]}`;
      case 'fadeButton':
        return `${style['image-fade-holder']} ${style[itemClassName]}`;
      case 'none':
        return style[itemClassName];
    }
  };
  const renderSlide = () => {
    switch (linkType) {
      case 'play-action': {
        return (
          <Link href={{ pathname: '/', query: { wchannelid: link } }}>
            <a className={style['slide-link']}>
              <div className={imageClassNameHandler()}>
                {hoverActionType !== 'none' && (
                  <>
                    <div
                      className={
                        hoverActionType === 'scaleButton' ? style['play-button-scale'] : style['play-button-fade']
                      }
                    >
                      <div className={style['play-button__icon']}>
                        <FontAwesomeIcon icon={faPlay} />
                      </div>
                    </div>
                  </>
                )}
                <div className={style['bc-image']}>
                  <div className={style['bc-image__wrapper']}>
                    <img className="test" src={img} alt={img.title} />
                  </div>
                </div>
              </div>

              <h2 className={style.Title}>{title}</h2>
              <p className={style.Description}>{description}</p>
            </a>
          </Link>
        );
      }
      case 'blog': {
        return (
          <Link href={{ pathname: `/blog/${[link]}` }}>
            <a className={style['slide-link']}>
              <div className={style[itemClassName]}>
                {img && (
                  <div className={style['bc-image']}>
                    <div className={style['bc-image__wrapper']}>
                      <img src={img} alt={img.title} id={img.fieldId} />
                    </div>
                  </div>
                )}
              </div>
              <div>
                <h2 className={style.Title}>{title}</h2>
                <p className={style.Description}>{description}</p>
              </div>
            </a>
          </Link>
        );
      }
      case 'single-video-slide': {
        return (
          <div className={style['inline-object-slide']}>
            <div className={style['single-slide-notes']}>
              <h2 className={style.Title}>{title}</h2>
              <p className={style.Description}>{description}</p>
            </div>
            <div className={style[itemClassName]}>
              <iframe src={img} scrolling="no" title={title} allow="autoplay; fullscreen"></iframe>
            </div>
          </div>
        );
      }
    }
  };

  return (
    <Fragment>
      <div className={style['container']}>{renderSlide()}</div>
    </Fragment>
  );
};

CarouselItem.propTypes = {
  img: PropTypes.objectOf({
    url: PropTypes.string,
    alt: PropTypes.string,
    fieldId: PropTypes.string,
  }),
  title: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
  hoverActionType: PropTypes.string,
  linkType: PropTypes.string,
  link: PropTypes.string,
  itemClassName: PropTypes.string,
};

CarouselItem.defaultProps = {
  img: {
    url: '',
    alt: 'img-slider',
    fieldId: '',
  },
  title: '',
  description: '',
  onClick: () => {},
  hoverActionType: 'none',
  linkType: 'normal',
  link: '#',
  itemClassName: 'medium-square',
};

export default CarouselItem;
