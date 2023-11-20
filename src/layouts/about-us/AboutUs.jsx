import NavBar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import TeamCards from '../../components/team-cards/TeamCards';
import LogoEcoSpark from '../../Logo.svg';
import './AboutUs.css';

function AboutUs() {
  return (
    <>
      <NavBar />
      <div className='container-fluid about-us-main'>
        <img
          src={LogoEcoSpark}
          alt='Logo EcoSpark'
          className='img-fluid logo-about-us'
        />
      </div>
      <TeamCards />
      <Footer />
    </>
  );
}

export default AboutUs;
