import Head from 'next/head';
import React from 'react';
export default function TransformedItem({ wistiaKey, title, description }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href={`https://fast.wistia.com/embed/channel/project/${wistiaKey}/font.css`} />
      </Head>
      <div className="wistia_responsive_padding" style={{ padding: '100.0% 0 0 0', position: 'relative' }}>
        <div
          className="wistia_responsive_wrapper"
          style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}
        >
          <div
            className={`wistia_channel wistia_async_${wistiaKey} mode=popover`}
            style={{ height: '100%', position: 'absolute', width: '100%' }}
          >
            &nbsp;
          </div>
        </div>
      </div>
      <br />
      <h2 className="carousel-item-title">{title}</h2>
      <p className="carousel-item-description">{description}</p>
    </>
  );
}
