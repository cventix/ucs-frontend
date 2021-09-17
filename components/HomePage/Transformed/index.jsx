import React from 'react';
import Carousel from '../../Hybrid/Carousel';
import CarouselItem from '../../Hybrid/Carousel/CarouselItem';
import editorStyle from './transformed.module.scss';
import style from '../../../assets/styles/styles.webflow.module.scss';

const Transformed = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
      title="China Transformed"
      carouselClassName={`${editorStyle['transformed']} ${editorStyle['bg-channel-copy']}`}
      titleClassName={style['carousel-heading']}
    >
      <CarouselItem
        image="/images/150*150.png"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={350}
        imageHeight={350}
      />
      <CarouselItem
        image="/images/150*150.png"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={350}
        imageHeight={350}
      />
      <CarouselItem
        image="/images/150*150.png"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={350}
        imageHeight={350}
      />
      <CarouselItem
        image="/images/150*150.png"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={350}
        imageHeight={350}
      />
      <CarouselItem
        image="/images/150*150.png"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={350}
        imageHeight={350}
      />
      <CarouselItem
        image="/images/150*150.png"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={350}
        imageHeight={350}
      />
      <CarouselItem
        image="/images/150*150.png"
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
