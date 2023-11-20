import './login-signup-style.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';




function Login() {

const[email, setEmail] = useState("");
const [user, setUser] = useState ({});
const [userLocal, setUserLocal] = useState({});
 


const handleEmail = (e) => {
  setEmail(e.target.value);
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

fetch("http://localhost:8080/api/v1/update/:iduser", {
    method: "PUT",
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
  
       <div
        id='fondo'
        className=' login template d-flex justify-content-center align-items-center vh-100 '>
        <div className='form_container p-5 rounded bg-white '>
          <form>
            <h4 className='text-center color-fondo-login mt-2 '>Iniciar Sesión</h4>
            <div className='mb-2'>
              <label className='color-fondo-login' htmlFor='email'>Email</label>
              <input
                type='email'
                placeholder='Ingrese su Email'
                className='form-control'
                onChange={handleEmail}
              />
            </div>
           
            <div className='d-grid'>
              <button type='button' id='boton' className='btn btn-primary' onClick={handleSubmit}>
                Ingresar
              </button>
            </div>
            <p className='text-end mt-2 registrate-ecospark'>
           
              <Link to='/signup' className='ms-2 color-fondo-login '>
                Regístrate
              </Link>
            </p>
          </form>

            <button type='button' className='btn btn-primary color-individual2' >
         <Link className='color-individual' to='/'>
           Ir a Inicio
          </Link> </button>
          </div>
          
     </div>
    
      
  
      
      


    
    </>
  )
}

export default Login;
