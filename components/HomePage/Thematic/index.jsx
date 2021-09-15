import React from 'react';
import Carousel from '../../Hybrid/Carousel';
import CarouselItem from '../../Hybrid/Carousel/CarouselItem';
import editorStyle from './thematic.module.scss';
import style from '../../../assets/styles/styles.webflow.module.scss';

const Thematic = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <Carousel
      settings={settings}
      title="Thematic"
      carouselClassName={editorStyle['events']}
      titleClassName={style['carousel-heading']}
    >
      <CarouselItem
        image="/images/150*150.png"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={274}
        imageHeight={180}
      />
      <CarouselItem
        image="/images/150*150.png"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={274}
        imageHeight={180}
      />
      <CarouselItem
        image="/images/150*150.png"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={274}
        imageHeight={180}
      />
      <CarouselItem
        image="/images/150*150.png"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={274}
        imageHeight={180}
      />
      <CarouselItem
        image="/images/150*150.png"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={274}
        imageHeight={180}
      />
      <CarouselItem
        image="/images/150*150.png"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={274}
        imageHeight={180}
      />
      <CarouselItem
        image="/images/150*150.png"
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
