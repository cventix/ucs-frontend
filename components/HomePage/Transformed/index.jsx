import React from 'react';
import Carousel from '../../Hybrid/Carousel';
import editorStyle from './transformed.module.scss';
import style from '../../../assets/styles/styles.webflow.module.scss';
import { items, settings } from './items';
import TransformItem from './item';

const Transformed = ({ data }) => {
  return (
    <>
      <Carousel
        settings={settings}
        title="China Transformed"
        carouselClassName={`${editorStyle['transformed']} ${editorStyle['bg-channel-copy']}`}
        titleClassName={style['carousel-heading']}
        ItemComponent={(key, title, description) => (
          <TransformItem wistiaKey={key} title={title} description={description} />
        )}
        items={items(data)}
        itemClassName="big-square"
        hoverActionType="fadeButton"
        linkType="play-action"
      />
    </>
  );
};

export default Transformed;
