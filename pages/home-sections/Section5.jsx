import React from 'react';
import homeStyles from './home.module.scss';
import Carousel from '../../components/Hybrid/Carousel';

const Section5 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Carousel
      settings={settings}
      title="Thematic"
      carouselClassName={`${homeStyles['thematic-events']}`}
      titleClassName={homeStyles['heading']}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </Carousel>
  );
};

export default Section5;
