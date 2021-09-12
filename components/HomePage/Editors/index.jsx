import React from 'react';
import Carousel from '../../Hybrid/Carousel';
import CarouselItem from '../../Hybrid/Carousel/CarouselItem';
import style from './Editor.module.scss';

const EditorsPicks = () => {
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
      title="Editors' Picks"
      carouselClassName={`${style['picks']} ${style['bg']}`}
      titleClassName={style['heading']}
    >
      <CarouselItem
        image="/images/Matt-Krake.jpeg"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={274}
        imageHeight={218}
      />
      <CarouselItem
        image="/images/Matt-Krake.jpeg"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={274}
        imageHeight={218}
      />
      <CarouselItem
        image="/images/Matt-Krake.jpeg"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={274}
        imageHeight={218}
      />
      <CarouselItem
        image="/images/Matt-Krake.jpeg"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={274}
        imageHeight={218}
      />
      <CarouselItem
        image="/images/Matt-Krake.jpeg"
        title="Podcast - Louis Gave"
        description="August 5 - Clay Shirky: New York University"
        type="image"
        imageWidth={274}
        imageHeight={218}
      />
    </Carousel>
  );
};

export default EditorsPicks;
