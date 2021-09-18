import React from 'react';
import Carousel from '../../Hybrid/Carousel';
import editorStyle from './Blogs.module.scss';
import style from '../../../assets/styles/styles.webflow.module.scss';
import { items, settings } from './items';

const Blogs = () => {
  return (
    <Carousel
      settings={settings}
      title="Blogs & Articles"
      carouselClassName={editorStyle['articles']}
      titleClassName={style['carousel-heading']}
      items={items}
      imageWidth={150}
      imageHeight={190}
      linkType="link"
    />
  );
};

export default Blogs;
