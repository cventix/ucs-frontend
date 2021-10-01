import { useRouter } from 'next/router';

export default function ZoomEmbeded() {
  const { query } = useRouter();
  const { meetingId } = query;

  if (!meetingId)
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>
    );

  return (
    <div className="iframe-container" style={{ overflow: 'hidden', paddingTop: '56.25%', position: 'relative' }}>
      <iframe
        title="zoom"
        allow="microphone; camera"
        style={{ border: 0, height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}
        src={`https://zoom.us/wc/join/${meetingId}`}
        frameBorder="0"
      ></iframe>
    </div>
  );
}
