import React, { useEffect } from 'react';
import Carousel from '../../Hybrid/Carousel';
import editorStyle from './thematic.module.scss';
import style from '../../../assets/styles/styles.webflow.module.scss';
import { items, settings } from './items';
import { useThematicMutation } from '../../../hooks/Query/cms';

const Thematic = () => {
  const { data: thematicResult, isLoading, error } = useThematicMutation();
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

export default Thematic;
