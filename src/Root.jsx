import Footer from './components/footer/Footer';
import TeamCards from './components/team-cards/TeamCards';
import Seccion from './components/main-content/Seccion';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Root() {
  return (
    <>
      <Navbar />
      <Seccion />
      <TeamCards />
      <Footer />
    </>
  );
}

export default Root;
