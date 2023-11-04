import ListMaker from '../ListMaker';
import dataLeft from './list-left';

const LeftSide = () => {
  const dataLefts = dataLeft.map((prop) => (
    <ListMaker key={prop.id} name={prop.name} />
  ));
  return (
    <>
      <ul>
        <li>
          <a href='#' className='title-href'>
            Inicio
          </a>
        </li>
        {dataLefts}
      </ul>
    </>
  );
};

export default LeftSide;
