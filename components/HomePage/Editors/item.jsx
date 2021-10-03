export default function EditorsPickItem({ wistiaKey }) {
  return (
    <>
      <script src={`https://fast.wistia.com/embed/medias/${wistiaKey}.jsonp`} async></script>
      <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
      <div className="wistia_responsive_padding" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <div
          className="wistia_responsive_wrapper"
          style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}
        >
          <span
            className={`wistia_embed wistia_async_${wistiaKey} container=popover_preview_embed popover=true popoverAnimateThumbnail=true videoFoam=true`}
            style={{ display: 'inline-block', height: '100%', position: 'relative', width: '100%' }}
          >
            &nbsp;
          </span>
        </div>
      </div>
    </>
  );
}
