import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderStyles from './carousel.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Carousel = (props) => {
  const items = props.items;
  const settings = {
    ...props.settings,
    arrows: true,
  };

  return (
    <div className={sliderStyles['slider-wrapper']}>
      <div className={sliderStyles['arrows']}>
        <button
          className={sliderStyles['button-arrow']}
          onClick={() => {
            const element = document.getElementsByClassName('slick-arrow slick-prev')[0];
            element.click();
          }}
        >
          <FontAwesomeIcon className={sliderStyles['icon-slider']} icon={faCaretLeft} />
        </button>
        <button
          className={sliderStyles['button-arrow']}
          onClick={() => {
            const element = document.getElementsByClassName('slick-arrow slick-next')[0];
            element.click();
          }}
        >
          <FontAwesomeIcon className={sliderStyles['icon-slider']} icon={faCaretRight} />
        </button>
      </div>
      <Slider {...settings}>
        {items.map((item) => {
          return (
            <div className={sliderStyles['slide-item']} key={item.id}>
              <div className={sliderStyles['img-container']}>
                <img src={item.imgUrl} alt={item.titleItem} className={sliderStyles['img-slide']} />
              </div>
              <div className="content-container">
                <Link href={item.href}>
                  <a className={sliderStyles['title-slider-container']}>
                    <h2 className={sliderStyles['title-slider']}>{item.titleItem}</h2>
                  </a>
                </Link>
                <p className={sliderStyles['desc-slider']}>{item.description}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

Carousel.propTypes = {
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
  settings: {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  },
};
export default Carousel;
