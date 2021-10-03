import Head from 'next/head';
import React from 'react';
export default function PodcastItem({ wistiaKey, title, description }) {
  return (
    <>
      <Head>
        <script src={`https://fast.wistia.com/embed/medias/${wistiaKey}.jsonp`} async></script>
      </Head>
      <div
        className={`wistia_embed wistia_async_${wistiaKey} container=popover_preview_embed popover=true popoverAnimateThumbnail=true videoFoam=true`}
        seo="false"
        style={{ width: '100%', height: 218, position: 'relative' }}
      >
        &nbsp;
      </div>
      <br />
      <h2 className="carousel-item-title">{title}</h2>
      <p className="carousel-item-description">{description}</p>
    </>
  );
}
