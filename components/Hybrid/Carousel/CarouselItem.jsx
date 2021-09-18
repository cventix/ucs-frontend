import React, { Fragment } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';
import style from './carousel.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const CarouselItem = (props) => {
  const { src, title, description, imageWidth, imageHeight, hoverActionType, link, linkType } = props;
  return (
    <Fragment>
      <div className={style.Container} style={{ width: imageWidth, height: imageHeight }}>
        {linkType === 'play-action' ? (
          <Link href={{ pathname: '/', query: { gallery: 'test' } }}>
            <a className={style['slide-link']}>
              <div
                className={hoverActionType === 'scaleButton' ? style['image-scale-holder'] : style['image-fade-holder']}
              >
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
                    <div className={style['bc-image__wrapper']}>
                      <img className="test" src={src} alt={title} width={imageWidth} height={imageHeight} />
                    </div>
                  </div>
                )}
              </div>

              <h2 className={style.Title}>{title}</h2>
              <p className={style.Description}>{description}</p>
            </a>
          </Link>
        ) : (
          <Link href={link}>
            <a>
              <div>{src && <Image src={src} width={imageWidth} height={imageHeight} />}</div>

              <h2 className={style.Title}>{title}</h2>
              <p className={style.Description}>{description}</p>
            </a>
          </Link>
        )}
      </div>
    </Fragment>
  );
};

CarouselItem.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  hoverActionType: PropTypes.string,
  linkType: PropTypes.string,
  link: PropTypes.string,
};

CarouselItem.defaultProps = {
  src: '',
  title: '',
  description: '',
  onClick: () => {},
  imageWidth: 0,
  imageHeight: 0,
  hoverActionType: 'none',
  linkType: 'normal',
  link: '#',
};

export default CarouselItem;
