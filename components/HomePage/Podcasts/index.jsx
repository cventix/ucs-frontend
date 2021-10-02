import React from 'react';
import Carousel from '../../Hybrid/Carousel';
import editorStyle from './podcasts.module.scss';
import style from '../../../assets/styles/styles.webflow.module.scss';
import { items, settings } from './items';

const Podcasts = ({ data }) => {
  return (
    <>
      <Carousel
        settings={settings}
        title="Podcasts"
        carouselClassName={`${editorStyle['members']} ${editorStyle['bg']}`}
        titleClassName={style['carousel-heading']}
        items={items(data)}
        itemClassName="small-square"
        hoverActionType="scaleButton"
        linkType="play-action"
      />
    </>
  );
};
export default Podcasts;
