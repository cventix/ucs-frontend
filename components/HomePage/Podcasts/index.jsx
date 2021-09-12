import React from 'react';
import Carousel from '../../Hybrid/Carousel';
import CarouselItem from '../CarouselItem';
import style from './podcasts.module.scss';

const Podcasts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <Carousel
      settings={settings}
      title="Podcasts"
      carouselClassName={`${style['members']} ${style['bg']}`}
      titleClassName={style['heading']}
    >
      <CarouselItem
        image="/images/150*150.png"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={150}
        imageHeight={150}
      />
      <CarouselItem
        image="/images/150*150.png"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={150}
        imageHeight={150}
      />
      <CarouselItem
        image="/images/150*150.png"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={150}
        imageHeight={150}
      />
      <CarouselItem
        image="/images/150*150.png"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={150}
        imageHeight={150}
      />
      <CarouselItem
        image="/images/150*150.png"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={150}
        imageHeight={150}
      />
      <CarouselItem
        image="/images/150*150.png"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={150}
        imageHeight={150}
      />
      <CarouselItem
        image="/images/150*150.png"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={150}
        imageHeight={150}
      />
    </Carousel>
  );
};

export default Podcasts;
