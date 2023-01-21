import Line from 'components/Line/Line';
import Content from './components/Content/Content';
import Nav from './components/Nav';

function MyTubePage() {
  return (
    <>
      <Nav />
      <Line direction="right" width={95} height={0.5} />
      <Content />
    </>
  );
}

export default MyTubePage;
