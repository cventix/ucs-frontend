import React from 'react';
import Carousel from '../../Hybrid/Carousel';
import CarouselItem from '../CarouselItem';
import style from './transformed.module.scss';

const Transformed = () => {
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
      title="China Transformed"
      carouselClassName={`${style['transformed']} ${style['bg-channel-copy']}`}
      titleClassName={style['heading']}
    >
      <CarouselItem
        image="/images/Matt-Krake.jpeg"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={350}
        imageHeight={350}
      />
      <CarouselItem
        image="/images/Matt-Krake.jpeg"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={350}
        imageHeight={350}
      />
      <CarouselItem
        image="/images/Matt-Krake.jpeg"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={350}
        imageHeight={350}
      />
      <CarouselItem
        image="/images/Matt-Krake.jpeg"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={350}
        imageHeight={350}
      />
      <CarouselItem
        image="/images/Matt-Krake.jpeg"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={350}
        imageHeight={350}
      />
      <CarouselItem
        image="/images/Matt-Krake.jpeg"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={350}
        imageHeight={350}
      />
      <CarouselItem
        image="/images/Matt-Krake.jpeg"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={350}
        imageHeight={350}
      />
    </Carousel>
  );
};

export default Transformed;
