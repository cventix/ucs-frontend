import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderStyles from './carousel.module.scss';
import styles from '../../../assets/styles/styles.webflow.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import CarouselItem from './CarouselItem';

const Carousel = (props) => {
  const { title, titleClassName, carouselClassName, items, imageWidth, imageHeight, linkType, hoverActionType } = props;

  const settings = {
    ...props.settings,
    arrows: true,
    className: sliderStyles['slideContainer'],
  };

  return (
    <div className={`${sliderStyles['slider-wrapper']} ${carouselClassName}`}>
      {title ? (
        <h1 className={titleClassName && titleClassName}>
          <span className={styles['text-span']}>{title && title}</span>
        </h1>
      ) : (
        <div className="mt-5" />
      )}
      <div className={sliderStyles['arrows']}>
        <button
          className={sliderStyles['button-arrow']}
          onClick={() => {
            const carouselElement = document.querySelector(`.${carouselClassName.replaceAll(/\s/g, '.')}`);
            const buttonElement = carouselElement.querySelector('.slick-arrow.slick-prev');
            buttonElement.click();
          }}
        >
          <FontAwesomeIcon className={sliderStyles['icon-slider']} icon={faCaretLeft} />
        </button>
        <button
          className={sliderStyles['button-arrow']}
          onClick={() => {
            const carouselElement = document.querySelector(`.${carouselClassName.replaceAll(/\s/g, '.')}`);
            const buttonElement = carouselElement.querySelector('.slick-arrow.slick-next');
            buttonElement.click();
          }}
        >
          <FontAwesomeIcon className={sliderStyles['icon-slider']} icon={faCaretRight} />
        </button>
      </div>
      <Slider {...settings}>
        {items?.length > 0 &&
          items.map((item) => {
            return (
              <CarouselItem
                key={item.id}
                src={item.src}
                title={item.title}
                description={item.description}
                link={item.link}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
                linkType={linkType}
                hoverActionType={hoverActionType}
              />
            );
          })}
      </Slider>
    </div>
  );
};

Carousel.propTypes = {
  title: PropTypes.string,
  titleClassName: PropTypes.string,
  carouselClassName: PropTypes.string,
  items: PropTypes.array,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  linkType: PropTypes.string,
  hoverActionType: PropTypes.string,
  settings: PropTypes.shape({
    dots: PropTypes.bool,
    infinite: PropTypes.bool,
    arrows: PropTypes.bool,
    speed: PropTypes.number,
    slidesToShow: PropTypes.number,
    slidesToScroll: PropTypes.number,
  }),
};

Carousel.defaultProps = {
  title: '',
  titleClassName: '',
  carouselClassName: '',
  items: [],
  imageWidth: 200,
  imageHeight: 200,
  linkType: 'normal',
  hoverActionType: 'none',
  settings: {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  },
};
export default Carousel;
