import { Chrono } from 'react-chrono';
import './Timeline_2.css';
import items from './data';
import Navbar from '../navbar/Navbar';

const Timeline = () => {
  return (
    <>
      <Navbar />
      <div className='mt-5' style={{ width: '100%', height: '95vh' }}>
        <Chrono
          items={items}
          mode='VERTICAL_ALTERNATING'
          cardHeight={450}
          cardWidth={400}
          mediaHeight={400}
          slideShow
          scrollable={{ scrollbar: true }}
          slideItemDuration={2500}
          slideShowType='reveal'
          fontSizes={{
            cardSubtitle: '0.8rem',
            cardTitle: '1.2rem',
            title: '1.5rem',
          }}
        />
      </div>
    </>
  );
};

export default Timeline;
