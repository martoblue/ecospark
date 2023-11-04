import LeftSide from './left/LeftSide';
import Center from './center/CenterSide';
import RightSide from './right/RightSide';

const SiteMap = () => {
  return (
    <>
      <div className='site-map'>
        <div className='site-container-left decoration'>
          <LeftSide />
        </div>
        <div className='site-container-center decoration'>
          <Center />
        </div>
        <div className='site-container-right decoration'>
          <RightSide />
        </div>
      </div>
    </>
  );
};

export default SiteMap;
