import { Link } from 'react-router-dom';
import './login-signup-style.css';
import { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';


function Signup() {
  //agregar constante para union backend  1ERA parte

const navigate = useNavigate();     // 1/3para redireccionar despues del registro

const [name, setName] = useState("");
const[lastName, setLastName] = useState("");     //primera parte agregar constantes
const[email, setEmail] = useState("");
const[password, setPassword] = useState("");
const[userCreate, setUserCreate]= useState(false);    //  2/3 para redireccionar el usuario al login si su verificacion es correcta

const handleName = (e) => {
  setName(e.target.value);
}
const handleLastName = (e) => {
  setLastName(e.target.value);                //Tercera parte 
}
const handleEmail = (e) => {
  setEmail(e.target.value);
}
const handlePassword = (e) => {
  setPassword(e.target.value);
}

//4to paso crear funcion para el boton
const handleSubmit = () => {
  if (!name || !lastName || !email || !password){
    alert("todos los campos son obligatorios");
    return;
  }

  const user = {
    "name":name,
    "lastName": lastName,
    "email": email,
    "password": password
  }
   /*
  document.getElementById("name").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
*/
  //5to paso Fetch
  fetch("http://localhost:8080/api/v1/crear", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user),          //Debemos intalar npm install cors en el backend
  }).then(response =>response.json()) 
  .then(data => {
    console.log(data);
    /*setName("");
    setLastName("");
    setEmail("");
    setPassword("");*/
    if(data.status === 201) 
    setUserCreate(true);
  })
  .catch((error) => {
console.error("error:", error);
  })
}



  return (
    <>
      
      <div
        id='fondo2'
        className='signup template d-flex justify-content-center align-items-center vh-100'
      >
        <div className='form_container p-5 rounded bg-white'>
          <form>
            <h3 className='text-center'>Registrarse</h3>
            <div className='mb-2'>
              <label htmlFor='fname'>Nombre</label>
              <input
                type='text'
                placeholder='Ingrese su nombre'
                className='form-control'
                onChange={handleName} //Parte de union Backend  2DA parte
              />
            </div>
            <div className='mb-2'>
              <label htmlFor='lname'>Apellido</label>
              <input
                type='text'
                placeholder='Ingrese su apellido'
                className='form-control'
                onChange={handleLastName} //Parte de union Backend 2DA parte
              />
            </div>
            <div className='mb-2'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                placeholder='Ingrese su email'
                className='form-control'
                onChange={handleEmail} //Parte de union Backend 2DA parte
              />
            </div>
            <div className='mb-2'>
              <label htmlFor='password'>Contraseña</label>
              <input
                type='password'
                placeholder='Ingrese nueva contraseña'
                className='form-control'
                onChange={handlePassword} //Parte de union Backend 2DA parte
              />
            </div>

            <div className='d-grid mt-2'>
              <button type='button' id='boton2' className='btn btn-primary' onClick={handleSubmit}>
                Registrarse
              </button>
            </div>
            <p className='text-end mt-2'>
              Vamos a{' '}
              <Link to='/login' className='ms-2'>
                Iniciar Sesión
              </Link>
            </p>
          </form>
          <button type='button' className='btn btn-primary color-individual3' >
         <Link className='color-individual ' to='/'>
           Ir a Inicio
          </Link> </button>
       
        </div>
      </div>
    </>
  );
}

export default Signup;
