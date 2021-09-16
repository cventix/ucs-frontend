import React from 'react';
import Carousel from '../../Hybrid/Carousel';
import style from './transformed.module.scss';

const Transformed = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const items = [
    {
      id: 1,
      src: '/images/150*150.png',
      title: 'Podcast - Louis Gave',
      description: 'August 5 - Clay Shirky: New York University',
    },
    {
      id: 2,
      src: '/images/150*150.png',
      title: 'Podcast - Louis Gave',
      description: 'August 5 - Clay Shirky: New York University',
    },
    {
      id: 3,
      src: '/images/150*150.png',
      title: 'Podcast - Louis Gave',
      description: 'August 5 - Clay Shirky: New York University',
    },
    {
      id: 4,
      src: '/images/150*150.png',
      title: 'Podcast - Louis Gave',
      description: 'August 5 - Clay Shirky: New York University',
    },
    {
      id: 5,
      src: '/images/150*150.png',
      title: 'Podcast - Louis Gave',
      description: 'August 5 - Clay Shirky: New York University',
    },
    {
      id: 6,
      src: '/images/150*150.png',
      title: 'Podcast - Louis Gave',
      description: 'August 5 - Clay Shirky: New York University',
    },
    {
      id: 7,
      src: '/images/150*150.png',
      title: 'Podcast - Louis Gave',
      description: 'August 5 - Clay Shirky: New York University',
    },
    {
      id: 8,
      src: '/images/150*150.png',
      title: 'Podcast - Louis Gave',
      description: 'August 5 - Clay Shirky: New York University',
    },
  ];

  return (
    <Carousel
      settings={settings}
      title="China Transformed"
      carouselClassName={`${style['transformed']} ${style['bg-channel-copy']}`}
      titleClassName={style['heading']}
      items={items}
      imageWidth={350}
      imageHeight={350}
      linkType="play-action"
      hoverActionType="fadeButton"
    />
  );
};

export default Transformed;
