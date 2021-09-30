import React, { useEffect } from 'react';
import Carousel from '../../Hybrid/Carousel';
import { items, settings } from './items';
import editorStyle from './Blogs.module.scss';
import style from '../../../assets/styles/styles.webflow.module.scss';
import { useBlogMutation } from '../../../hooks/Query/cms';
import axios from 'axios';

const Blogs = (props) => {
  const { data: blogResult, isLoading, error } = useBlogMutation(props.posts);

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
Blogs.getInitialProps = async () => {
  const res = await axios('api/cms/blog');
  const data = await res.json();
  return { posts: data };
};

export default Blogs;
