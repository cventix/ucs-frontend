import React, { Fragment } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import style from './carousel.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const CarouselItem = (props) => {
  const { src, title, description, imageWidth, imageHeight, hoverActionType, linkType } = props;
  return (
    <Fragment>
      <div className={style.Container}>
        {linkType === 'play-action' ? (
          <div className={style['slide-link']}>
            <div
              className={hoverActionType === 'scaleButton' ? style['image-scale-holder'] : style['image-fade-holder']}
            >
              {hoverActionType !== 'none' && (
                <div
                  className={hoverActionType === 'scaleButton' ? style['play-button-scale'] : style['play-button-fade']}
                >
                  <div className={style['play-button__icon']}>
                    <FontAwesomeIcon icon={faPlay} />
                  </div>
                </div>
              )}
              {src && <Image src={src} width={imageWidth} height={imageHeight} />}
            </div>
          </div>
        ) : (
          <div>{src && <Image src={src} width={imageWidth} height={imageHeight} />}</div>
        )}
        <h2 className={style.Title}>{title}</h2>
        <p className={style.Description}>{description}</p>
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
};

export default CarouselItem;
