import React from 'react';
import Carousel from '../../Hybrid/Carousel';
import style from './Editor.module.scss';

const EditorsPicks = () => {
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
  ];
  return (
    <Carousel
      settings={settings}
      title="Editors' Picks"
      carouselClassName={`${style['picks']} ${style['bg']}`}
      titleClassName={style['heading']}
      items={items}
      imageWidth={274}
      imageHeight={218}
      linkType="play-action"
      hoverActionType="scaleButton"
    />
  );
};

export default EditorsPicks;
