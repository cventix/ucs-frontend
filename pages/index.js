import React from 'react';
import Head from 'next/head';

import Layout from '../layout';
import HomeSections from '../components/HomePage';

export default function Home(props) {
  return (
    <>
      <Head>
        <script src="https://fast.wistia.com/assets/external/channel.js" async></script>
        <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
      </Head>
      <Layout>
        <HomeSections sectionData={props} />
      </Layout>
    </>
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
