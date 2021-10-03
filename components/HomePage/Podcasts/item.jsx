export default function PodcastItem({ wistiaKey }) {
  return (
    <>
      <script src={`https://fast.wistia.com/embed/medias/${wistiaKey}.jsonp`} async></script>
      <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
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
