export default function Category({ title }) {
  return (
    <div
      style={{ writingMode: 'vertical-rl', textOrientation: 'upright', letterSpacing: '0.4em' }}
      className='h-full text-2xl my-4'
    >
      {title}
    </div>
  );
}
