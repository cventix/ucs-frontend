import React from 'react';
import Carousel from '../../Hybrid/Carousel';
import editorStyle from './thematic.module.scss';
import style from '../../../assets/styles/styles.webflow.module.scss';
import { items, settings } from './items';
import ThematicItem from './item';

const Thematic = ({ data }) => {
  return (
    <>
      <Carousel
        settings={settings}
        title="Thematic"
        carouselClassName={editorStyle['events']}
        titleClassName={style['carousel-heading']}
        ItemComponent={(key) => <ThematicItem wistiaKey={key} />}
        items={items(data)}
        itemClassName="big-square"
        hoverActionType="fadeButton"
        linkType="play-action"
      />
    </>
  );
};

export default Thematic;
