import React from 'react';
import Carousel from '../../Hybrid/Carousel';
import CarouselItem from '../../Hybrid/Carousel/CarouselItem';
import editorStyle from './Blogs.module.scss';
import style from '../../../assets/styles/styles.webflow.module.scss';

const Blogs = () => {
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
      title="Blogs & Articles"
      carouselClassName={editorStyle['articles']}
      titleClassName={style['carousel-heading']}
    >
      <CarouselItem
        image="/images/150*150.png"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={150}
        imageHeight={190}
      />
      <CarouselItem
        image="/images/150*150.png"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={150}
        imageHeight={190}
      />
      <CarouselItem
        image="/images/150*150.png"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={150}
        imageHeight={190}
      />
      <CarouselItem
        image="/images/150*150.png"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={150}
        imageHeight={190}
      />
      <CarouselItem
        image="/images/150*150.png"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={150}
        imageHeight={190}
      />
      <CarouselItem
        image="/images/150*150.png"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={150}
        imageHeight={190}
      />
      <CarouselItem
        image="/images/150*150.png"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={150}
        imageHeight={190}
      />
      <CarouselItem
        image="/images/150*150.png"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={150}
        imageHeight={190}
      />
      <CarouselItem
        image="/images/150*150.png"
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
