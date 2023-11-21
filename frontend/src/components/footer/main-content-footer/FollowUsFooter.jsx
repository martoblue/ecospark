import { Link } from 'react-router-dom';

const FollowUsFooter = () => {
  return (
    <>
      <div className='follow-us'>
        <span className='title-follow-us'>Síguenos en: </span>
        <span className='social-media-footer'>
          <Link
            to='https://github.com/martoblue/ecospark'
            className='anchor-footer'
            target='_blank'
          >
            Github
          </Link>
          {/* <a href='#' className='anchor-footer'>
            Twitter
          </a>
          <a href='#' className='anchor-footer'>
            Facebook
          </a> */}
        </span>
      </div>
    </>
  );
};

export default FollowUsFooter;
