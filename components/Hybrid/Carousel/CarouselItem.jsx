import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import style from './carousel.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const CarouselItem = (props) => {
  const { src, title, description, hoverActionType, itemClassName, link, linkType } = props;

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
          <Link href={{ pathname: '/', query: { gallery: 'test' } }}>
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
                {src && (
                  <div className={style['bc-image']}>
                    <div className={style['bc-image__wrapper']} style={{ backgroundImage: `url(${src})` }}>
                      <img className="test" src={src} alt={title} />
                    </div>
                  </div>
                )}
              </div>

              <h2 className={style.Title}>{title}</h2>
              <p className={style.Description}>{description}</p>
            </a>
          </Link>
        );
      }
      case 'blog': {
        return (
          <Link href={link}>
            <a className={style['slide-link']}>
              <div className={style[itemClassName]}>
                {src && (
                  <div className={style['bc-image']}>
                    <div className={style['bc-image__wrapper']} style={{ backgroundImage: `url(${src})` }}>
                      <img src={src} alt={title} />
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
              <iframe src={src} scrolling="no" title={title} allow="autoplay; fullscreen"></iframe>
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
  src: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
  hoverActionType: PropTypes.string,
  linkType: PropTypes.string,
  link: PropTypes.string,
  itemClassName: PropTypes.string,
};

CarouselItem.defaultProps = {
  src: '',
  title: '',
  description: '',
  onClick: () => {},
  hoverActionType: 'none',
  linkType: 'normal',
  link: '#',
  itemClassName: 'medium-square',
};

export default CarouselItem;
