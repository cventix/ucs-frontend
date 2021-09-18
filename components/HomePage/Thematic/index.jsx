import React from 'react';
import Carousel from '../../Hybrid/Carousel';
import editorStyle from './thematic.module.scss';
import style from '../../../assets/styles/styles.webflow.module.scss';

import { items, settings } from './items';

const Thematic = () => {
  return (
    <>
      <Carousel
        settings={settings}
        title="Thematic"
        carouselClassName={editorStyle['events']}
        titleClassName={style['carousel-heading']}
        items={items}
        imageWidth={204}
        imageHeight={204}
        hoverActionType="fadeButton"
        linkType="play-action"
      />
    </>
  );
};

export default Thematic;
