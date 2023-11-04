import ListMaker from '../ListMaker';
import dataCenter from './list-center';

const CenterSide = () => {
  const dataCenters = dataCenter.map((prop) => (
    <ListMaker key={prop.id} name={prop.name} />
  ));

  return (
    <>
      <ul>
        <li>
          <a href='#' className='title-href'>
            Recursos
          </a>
        </li>
        {dataCenters}
      </ul>
    </>
  );
};

export default CenterSide;
