import FooterHeader from './footer-header/FooterHeader.jsx';
import MainContentFooter from './main-content-footer/MainContentFooter.jsx';
import './footer.css';
import SiteMap from './site-map/SiteMap.jsx';

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <FooterHeader />
        <div className='footer-main-container'>
          <MainContentFooter />
          <SiteMap />
        </div>
      </footer>
    </>
  );
};

export default Footer;
