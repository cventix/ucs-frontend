import React, { useEffect } from 'react';
import Carousel from '../../Hybrid/Carousel';
import editorStyle from './Editor.module.scss';
import style from '../../../assets/styles/styles.webflow.module.scss';
import { items, settings } from './items';
import { useEditorsPicksMutation } from '../../../hooks/Query/cms';
import axios from 'axios';

const EditorsPicks = (props) => {
  const { data: editorsResult, isLoading, error } = useEditorsPicksMutation(props.posts);
  useEffect(() => {
    error && console.log(error);
  }, [error]);
  return (
    <>
      {isLoading ? (
        'please waite...'
      ) : (
        <Carousel
          settings={settings}
          title="Editors' Picks"
          carouselClassName={`${editorStyle['picks']} ${editorStyle['bg']}`}
          titleClassName={style['carousel-heading']}
          items={items(editorsResult?.data)}
          itemClassName="horizontal-rectangle"
          hoverActionType="scaleButton"
          linkType="play-action"
        />
      )}
    </>
  );
};

EditorsPicks.getInitialProps = async () => {
  const res = await axios('api/cms/editors-picks');
  const data = await res.json();
  return { posts: data };
};

export default EditorsPicks;
