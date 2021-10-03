import Head from 'next/head';
export default function PodcastItem({ wistiaKey }) {
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
    </>
  );
}
