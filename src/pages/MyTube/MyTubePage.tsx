import Line from 'components/Line/Line';
import Filter from './components/Filter/Filter';
import Nav from './components/Nav/Nav';
import Section from './components/Section/Section';

function MyTubePage() {
  return (
    <>
      <Nav />
      <Line direction="right" width={95} height={0.5} />
      <Filter />
      <Section />
    </>
  );
}

export default MyTubePage;
