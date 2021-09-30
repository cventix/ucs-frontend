import React, { useEffect } from 'react';
import Carousel from '../../Hybrid/Carousel';
import editorStyle from './thematic.module.scss';
import style from '../../../assets/styles/styles.webflow.module.scss';
import { items, settings } from './items';
import { useThematicMutation } from '../../../hooks/Query/cms';
import axios from 'axios';

const Thematic = (props) => {
  const { data: thematicResult, isLoading, error } = useThematicMutation(props.posts);
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
          title="Thematic"
          carouselClassName={editorStyle['events']}
          titleClassName={style['carousel-heading']}
          items={items(thematicResult?.data)}
          itemClassName="big-square"
          hoverActionType="fadeButton"
          linkType="play-action"
        />
      )}
    </>
  );
};

Thematic.getInitialProps = async () => {
  const res = await axios('api/cms/thematic');
  const data = await res.json();
  return { posts: data };
};

export default Thematic;
