import AboutUsFooter from './AboutUsFooter.jsx';
import FollowUsFooter from './FollowUsFooter.jsx';
// import TermsAndCondit from './TermsAndCondit.jsx';
import CopyRight from './CopyRight.jsx';

const MainContentFooter = () => {
  return (
    <>
      <div className='main-content-footer'>
        <AboutUsFooter />
        <FollowUsFooter />
        {/* <TermsAndCondit /> */}
        <CopyRight />
      </div>
    </>
  );
};

export default MainContentFooter;
