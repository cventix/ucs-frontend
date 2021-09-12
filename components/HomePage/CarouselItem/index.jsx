import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import style from './CarouselItem.module.scss';

const CarouselItem = ({ image, title, description, type, imageWidth, imageHeight }) => {
  return (
    <Fragment>
      <div className={style.Container}>
        {type === 'image' ? (
          <Link href="#">
            <a>{image && <Image src={image} width={imageWidth} height={imageHeight} />}</a>
          </Link>
        ) : (
          <div>{image && <Image src={image} width={imageWidth} height={imageHeight} />}</div>
        )}
        <h2 className={style.Title}>{title}</h2>
        <p className={style.Description}>{description}</p>
      </div>
    </Fragment>
  );
};

CarouselItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
};

CarouselItem.defaultProps = {
  image: '',
  title: '',
  description: '',
  type: '',
  onClick: () => {},
  imageWidth: 0,
  imageHeight: 0,
};

export default CarouselItem;
