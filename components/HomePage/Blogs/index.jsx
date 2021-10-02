import React from 'react';
import Carousel from '../../Hybrid/Carousel';
import { items, settings } from './items';
import editorStyle from './Blogs.module.scss';
import style from '../../../assets/styles/styles.webflow.module.scss';

const Blogs = ({ data }) => {
  return (
    <>
      <Carousel
        settings={settings}
        title="Blogs & Articles"
        carouselClassName={editorStyle['articles']}
        titleClassName={style['carousel-heading']}
        items={items(data)}
        itemClassName="medium-square"
        linkType="blog"
      />
    </>
  );
};

export default Blogs;
