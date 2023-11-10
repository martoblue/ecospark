import Footer from './components/footer/Footer';
import TeamCards from './components/team-cards/TeamCards';
import Seccion from './components/main-content/Seccion';
import 'bootstrap/dist/css/bootstrap.min.css';

function Root() {
  return (
    <>
      <Seccion />
      <TeamCards />
      <Footer />
    </>
  );
}

export default Root;
