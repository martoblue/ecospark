import React, {useState, useEffect} from 'react';
//Hijo

function SortedProductList(props) {

    const [productosOrdenados, setProductosOrdenados] = useState([]);

  const{id, name, status, species, gender,image } = props;

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data)  => setProductosOrdenados(data.results))
    .catch((err) => console.log(err));
  },[]);

  

  return (

    <div className='color'>
      
      <h1 className="titulo">Mi Producto </h1> 
      <img className='tamaño' src= {image} alt= {name} /> 
      <h2>name: {name}</h2>
      <h2>id : {id}</h2>
      <h2>status: {status}</h2>
     <h2>species: {species}</h2>
      <h2>gender : {gender}</h2>
     
     
      
      
        
     {productosOrdenados.map((productosOrdenado) => (
     
     <div key={productosOrdenado.id}>
        <div>
            image= {productosOrdenado.image}
           name= {productosOrdenado.name}
            id={productosOrdenado.id}
            status={productosOrdenado.status}
            species={productosOrdenado.species}
            gender={productosOrdenado.gender}
            category= {productosOrdenado.category}
            </div>
  </div>
    ))}

        
    </div>
  );
}
export default SortedProductList;