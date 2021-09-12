import React from 'react';
import Carousel from '../../Hybrid/Carousel';
import CarouselItem from '../../Hybrid/Carousel/CarouselItem';
import style from './thematic.module.scss';

const Thematic = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <Carousel
      settings={settings}
      title="Thematic"
      carouselClassName={style['events']}
      titleClassName={style['heading']}
    >
      <CarouselItem
        image="/images/Matt-Krake.jpeg"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={274}
        imageHeight={180}
      />
      <CarouselItem
        image="/images/Matt-Krake.jpeg"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={274}
        imageHeight={180}
      />
      <CarouselItem
        image="/images/Matt-Krake.jpeg"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={274}
        imageHeight={180}
      />
      <CarouselItem
        image="/images/Matt-Krake.jpeg"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={274}
        imageHeight={180}
      />
      <CarouselItem
        image="/images/Matt-Krake.jpeg"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={274}
        imageHeight={180}
      />
      <CarouselItem
        image="/images/Matt-Krake.jpeg"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={274}
        imageHeight={180}
      />
      <CarouselItem
        image="/images/Matt-Krake.jpeg"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={274}
        imageHeight={180}
      />
    </Carousel>
  );
};

export default Thematic;
