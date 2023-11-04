function DropdownResources() {
  return (
    <div className='dropdown'>
      <button className='dropbtn'>
        Recursos <i className='fa fa-caret-down'></i>
      </button>
      <div className='dropdown-content'>
        <a href='#'>Proyectos Caseros</a>
        <a href='#'>Mapa Interactivo</a>
        <a href='#'>Calculadora EcoS</a>
      </div>
    </div>
  );
}

export default DropdownResources;
