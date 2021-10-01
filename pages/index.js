import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Layout from '../layout';
import HomeSections from '../components/HomePage';

export default function Home() {
  const { query } = useRouter();
  const { wchannelid } = query;

  if (wchannelid) {
    return (
      <>
        <Head>
          <script src="https://fast.wistia.com/assets/external/channel.js" async></script>
          <link rel="stylesheet" href={`https://fast.wistia.com/embed/channel/project/${wchannelid}/font.css`} />
        </Head>
        <div
          className={`wistia_channel wistia_async_${wchannelid} mode=inline`}
          style={{ minHeight: '100vh', position: 'relative', width: '100%' }}
        ></div>
      </>
    );
  }

  return (
    <Layout>
      <HomeSections />
    </Layout>
  );
}
