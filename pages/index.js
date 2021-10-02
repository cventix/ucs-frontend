import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Layout from '../layout';
import HomeSections from '../components/HomePage';

export default function Home(props) {
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
      <HomeSections sectionData={props} />
    </Layout>
  );
}

export async function getServerSideProps() {
  // fetch post contents
  const blogPosts = await (await import('./api/cms/blog')).getBlogs();
  const editorPicks = await (await import('./api/cms/editors-picks')).getEditorPicks();
  const podcasts = await (await import('./api/cms/podcasts')).getPodcasts();
  const thematics = await (await import('./api/cms/thematic')).getThematics();
  const transformed = await (await import('./api/cms/transformed')).getTransformed();

  return { props: { blogPosts, editorPicks, podcasts, thematics, transformed } };
}
