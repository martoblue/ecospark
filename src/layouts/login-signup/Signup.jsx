import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import './login-signup-style.css';

function Signup() {
  return (
    <>
      <Navbar />
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
              />
            </div>
            <div className='mb-2'>
              <label htmlFor='lname'>Apellido</label>
              <input
                type='text'
                placeholder='Ingrese su apellido'
                className='form-control'
              />
            </div>
            <div className='mb-2'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                placeholder='Ingrese su email'
                className='form-control'
              />
            </div>
            <div className='mb-2'>
              <label htmlFor='password'>Contraseña</label>
              <input
                type='password'
                placeholder='Ingrese nueva contraseña'
                className='form-control'
              />
            </div>

            <div className='d-grid mt-2'>
              <button id='boton2' className='btn btn-primary'>
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
        </div>
      </div>
    </>
  );
}

export default Signup;
