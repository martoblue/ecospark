import './login-signup-style.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

function Login() {
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
              />
            </div>
            <div className='mb-2'>
              <label htmlFor='password'>Contraseña</label>
              <input
                type='password'
                placeholder='Ingrese su contraseña'
                className='form-control'
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
              <button id='boton' className='btn btn-primary'>
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
        </div>
      </div>
    </>
  );
}

export default Login;
