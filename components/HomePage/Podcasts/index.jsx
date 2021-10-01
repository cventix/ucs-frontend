import React, { useEffect } from 'react';
import Carousel from '../../Hybrid/Carousel';
import editorStyle from './podcasts.module.scss';
import style from '../../../assets/styles/styles.webflow.module.scss';
import { items, settings } from './items';
import { usePodcastMutation } from '../../../hooks/Query/cms';
const Podcasts = () => {
  const { data: podcastsResult, isLoading, error } = usePodcastMutation();
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
          title="Podcasts"
          carouselClassName={`${editorStyle['members']} ${editorStyle['bg']}`}
          titleClassName={style['carousel-heading']}
          items={items(podcastsResult?.data)}
          itemClassName="small-square"
          hoverActionType="scaleButton"
          linkType="play-action"
        />
      )}
    </>
  );
};

export default Podcasts;
