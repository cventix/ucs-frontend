import React from 'react';
import Carousel from '../../Hybrid/Carousel';
import CarouselItem from '../../Hybrid/Carousel/CarouselItem';
import style from './Blogs.module.scss';

const Blogs = () => {
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
      title="Blogs & Articles"
      carouselClassName={style['articles']}
      titleClassName={style['heading']}
    >
      <CarouselItem
        image="/images/Matt-Krake.jpeg"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={150}
        imageHeight={190}
      />
      <CarouselItem
        image="/images/Matt-Krake.jpeg"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={150}
        imageHeight={190}
      />
      <CarouselItem
        image="/images/Matt-Krake.jpeg"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={150}
        imageHeight={190}
      />
      <CarouselItem
        image="/images/Matt-Krake.jpeg"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={150}
        imageHeight={190}
      />
      <CarouselItem
        image="/images/Matt-Krake.jpeg"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={150}
        imageHeight={190}
      />
      <CarouselItem
        image="/images/Matt-Krake.jpeg"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={150}
        imageHeight={190}
      />
      <CarouselItem
        image="/images/Matt-Krake.jpeg"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={150}
        imageHeight={190}
      />
      <CarouselItem
        image="/images/Matt-Krake.jpeg"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={150}
        imageHeight={190}
      />
      <CarouselItem
        image="/images/Matt-Krake.jpeg"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={150}
        imageHeight={190}
      />
    </Carousel>
  );
};

export default Blogs;
