import React, { useEffect } from 'react';
import Carousel from '../../Hybrid/Carousel';
import { items, settings } from './items';
import editorStyle from './Blogs.module.scss';
import style from '../../../assets/styles/styles.webflow.module.scss';
import { useBlogMutation } from '../../../hooks/Query/cms';

const Blogs = () => {
  const { data: blogResult, isLoading, error } = useBlogMutation();
  useEffect(() => {
    error && console.log(error);
  }, [error]);
  return (
    <>
      {isLoading ? (
        'please wait...'
      ) : (
        <Carousel
          settings={settings}
          title="Blogs & Articles"
          carouselClassName={editorStyle['articles']}
          titleClassName={style['carousel-heading']}
          items={items(blogResult?.data)}
          itemClassName="medium-square"
          linkType="blog"
        />
      )}
    </>
  );
};

export default Blogs;
