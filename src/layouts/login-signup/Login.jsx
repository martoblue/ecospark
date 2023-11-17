import './login-signup-style.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import { useEffect, useState } from 'react';

function Login() {

const[email, setEmail] = useState("");
const[password, setPassword] = useState("");
const [user, setUser] = useState ({});
const [userLocal, setUserLocal] = useState({});
 


const handleEmail = (e) => {
  setEmail(e.target.value);
}
const handlePassword = (e) => {
  setPassword(e.target.value);
}

const handleLogout = () => {
  localStorage.removeItem("user");
  window.location.reload();
}


const handleSubmit = () => {
  if ( !email || !password){
    alert("todos los campos son obligatorios");
    return;
  }

  



const user = {
  "email": email,
  "password": password
}

/*
document.getElementById("email").value = "";
document.getElementById("password").value = "";
*/

fetch("http://localhost:8080/api/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(user),          //Debemos intalar npm install cors en el backend
  })
  .then(response =>response.json()) 
  .then((data) => {
    setUser(data);
   localStorage.setItem("token", JSON.stringify(data.token));
 })
 
}

useEffect(() => {
  if(user.status === 200){
    localStorage.setItem("user", JSON.stringify(user.data));
  }},[user])

  useEffect(() => {
    if(localStorage.getItem("user") !== null){
    setUserLocal(JSON.parse(localStorage.getItem("user")));
   }}, [user])

  return (
    <>

  <Navbar />
      <div
        id='fondo'
        className='login template d-flex justify-content-center align-items-center vh-100'
      >
        <div className='form_container p-5 rounded bg-white'>
          <form>
            <h3 className='text-center'>Iniciar Sesión</h3>
            <div className='mb-2'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                placeholder='Ingrese su Email'
                className='form-control'
                onChange={handleEmail}
              />
            </div>
            <div className='mb-2'>
              <label htmlFor='password'>Contraseña</label>
              <input
                type='password'
                placeholder='Ingrese su contraseña'
                className='form-control'
                onChange={handlePassword}
              />
            </div>
            <div className='mb-2'>
              <input
                type='checkbox'
                className='custom-control custom-checkbox'
                id='check'
              />
              <label htmlFor='check' className='custom-input-label ms-2'>
                Recordarme
              </label>
            </div>
            <div className='d-grid'>
              <button type='button' id='boton' className='btn btn-primary' onClick={handleSubmit}>
                Ingresar
              </button>
            </div>
            <p className='text-end mt-2'>
              Olvidé mi <a href=''>Contraseña?</a>
              <Link to='/signup' className='ms-2'>
                Regístrate
              </Link>
            </p>
          </form>

          <div>
            {localStorage.getItem("user") !== null && (
              <div className='fondo-backend'> 
                <p className='text-center'><strong>Bienvenido(a), a</strong></p>
                <h5 className='text-center'>"Ecospark"</h5>
                <h5 className='text-center'><strong>{userLocal.name}   {userLocal.lastName}</strong></h5>
              </div>
            )}
          </div>
       <div className='Desconectar-sesion'>
       <button type='button' className='btn btn-primary' onClick={handleLogout}>
         Desconectar </button>

       </div>
        

        </div>
      </div>
      
  
      
    


    
    </>
  );
}

export default Login;
