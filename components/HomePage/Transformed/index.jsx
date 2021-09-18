import React from 'react';
import Carousel from '../../Hybrid/Carousel';
import editorStyle from './transformed.module.scss';
import style from '../../../assets/styles/styles.webflow.module.scss';
import { items, settings } from './items';

const Transformed = () => {
  return (
    <Carousel
      settings={settings}
      title="China Transformed"
      carouselClassName={`${editorStyle['transformed']} ${editorStyle['bg-channel-copy']}`}
      titleClassName={style['carousel-heading']}
      items={items}
      imageWidth={259}
      imageHeight={259}
      hoverActionType="fadeButton"
      linkType="play-action"
    />
  );
};

export default Transformed;
