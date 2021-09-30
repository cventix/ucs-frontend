import React, { useEffect } from 'react';
import Carousel from '../../Hybrid/Carousel';
import editorStyle from './transformed.module.scss';
import style from '../../../assets/styles/styles.webflow.module.scss';
import { items, settings } from './items';
import { useTransformedMutation } from '../../../hooks/Query/cms';
import axios from 'axios';

const Transformed = (props) => {
  const { data: transformedResult, isLoading, error } = useTransformedMutation(props.posts);
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
          title="China Transformed"
          carouselClassName={`${editorStyle['transformed']} ${editorStyle['bg-channel-copy']}`}
          titleClassName={style['carousel-heading']}
          items={items(transformedResult?.data)}
          itemClassName="big-square"
          hoverActionType="fadeButton"
          linkType="play-action"
        />
      )}
    </>
  );
};

Transformed.getInitialProps = async () => {
  const res = await axios('api/cms/china-transformed');
  const data = await res.json();
  return { posts: data };
};

export default Transformed;
