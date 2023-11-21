import ListMaker from '../ListMaker';
import dataCenter from './list-center';
import { Link } from 'react-router-dom';

const CenterSide = () => {
  const dataCenters = dataCenter.map((prop) => (
    <ListMaker key={prop.id} name={prop.name} ruta={prop.ruta} />
  ));

  return (
    <>
      <ul>
        <li>
          <Link to='#' className='title-href anchor-footer'>
            Recursos
          </Link>
        </li>
        {dataCenters}
      </ul>
    </>
  );
};

export default CenterSide;
