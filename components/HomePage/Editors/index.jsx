import React from 'react';
import Carousel from '../../Hybrid/Carousel';
import editorStyle from './Editor.module.scss';
import style from '../../../assets/styles/styles.webflow.module.scss';
import { items, settings } from './items';

const EditorsPicks = ({ data }) => {
  return (
    <>
      <Carousel
        settings={settings}
        title="Editors' Picks"
        carouselClassName={`${editorStyle['picks']} ${editorStyle['bg']}`}
        titleClassName={style['carousel-heading']}
        items={items(data)}
        itemClassName="horizontal-rectangle"
        hoverActionType="scaleButton"
        linkType="play-action"
      />
    </>
  );
};

export default EditorsPicks;
