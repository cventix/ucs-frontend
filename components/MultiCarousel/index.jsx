import React from 'react';
// import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import styles from './multiCarousel.module.scss';

const MultiCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={false} // means to render carousel on server-side.
      infinite={true}
      // autoPlay={this.props.deviceType !== 'mobile' ? true : false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      // containerClass={styles['carousel-container']}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </Carousel>
  );
};

// MultiCarousel.propTypes = {
//   settings: {
//     swipeable: PropTypes.bool,
//     draggable: PropTypes.bool,
//     showDots: PropTypes.bool,
//     responsive: PropTypes.object,
//     ssr: PropTypes.bool, // means to render carousel on server-side.
//     infinite: PropTypes.bool,
//     autoPlay: PropTypes.bool,
//     autoPlaySpeed: PropTypes.number,
//     keyBoardControl: PropTypes.bool,
//     customTransition: PropTypes.string,
//     transitionDuration: PropTypes.number,
//     containerClass: PropTypes.string,
//     removeArrowOnDeviceType: PropTypes.objectOf(PropTypes.string),
//     deviceType: PropTypes.string,
//     dotListClass: PropTypes.string,
//     itemClass: PropTypes.string,
//   },
// };

// MultiCarousel.defaultProps = {
//   settings: {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   },
// };
export default MultiCarousel;
