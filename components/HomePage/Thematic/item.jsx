export default function ThematicItem({ wistiaKey }) {
  return (
    <>
      <script src="https://fast.wistia.com/assets/external/channel.js" async></script>
      <link rel="stylesheet" href={`https://fast.wistia.com/embed/channel/project/${wistiaKey}/font.css`} />
      <div className="wistia_responsive_padding" style={{ padding: '100.0% 0 0 0', position: 'relative' }}>
        <div
          className="wistia_responsive_wrapper"
          style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}
        >
          <div
            className={`wistia_channel wistia_async_${wistiaKey} mode=popover`}
            style={{ height: '100%', position: 'absolute', width: '100%' }}
          ></div>
        </div>
      </div>
    </>
  );
}
