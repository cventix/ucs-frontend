import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderStyles from './carousel.module.scss';
import styles from '../../../assets/styles/styles.webflow.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Carousel = (props) => {
  const { children, title, titleClassName } = props;
  const settings = {
    ...props.settings,
    arrows: true,
  };

  return (
    <div className={sliderStyles['slider-wrapper']}>
      {title ? (
        <h1 className={titleClassName && titleClassName}>
          <span className={styles['text-span-6']}>{title && title}</span>
        </h1>
      ) : (
        <div className="mt-5" />
      )}

      <div className={sliderStyles['arrows']}>
        <button
          className={sliderStyles['button-arrow']}
          onClick={() => {
            const element = document.getElementsByClassName('slick-arrow slick-prev')[0];
            element?.click();
          }}
        >
          <FontAwesomeIcon className={sliderStyles['icon-slider']} icon={faCaretLeft} />
        </button>
        <button
          className={sliderStyles['button-arrow']}
          onClick={() => {
            const element = document.getElementsByClassName('slick-arrow slick-next')[0];
            element?.click();
          }}
        >
          <FontAwesomeIcon className={sliderStyles['icon-slider']} icon={faCaretRight} />
        </button>
      </div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  titleClassName: PropTypes.string,
  settings: {
    dots: PropTypes.bool,
    infinite: PropTypes.bool,
    arrows: PropTypes.bool,
    speed: PropTypes.number,
    slidesToShow: PropTypes.number,
    slidesToScroll: PropTypes.number,
  },
};

Carousel.defaultProps = {
  title: '',
  titleClassName: '',
  settings: {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  },
};
export default Carousel;
