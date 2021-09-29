import React, { useEffect } from 'react';
import Carousel from '../../Hybrid/Carousel';
import editorStyle from './Editor.module.scss';
import style from '../../../assets/styles/styles.webflow.module.scss';
import { items, settings } from './items';
import { useEditorsPicksMutation } from '../../../hooks/Query/cms';

const EditorsPicks = () => {
  const { data: editorsResult, isLoading, error } = useEditorsPicksMutation();
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

export default EditorsPicks;
