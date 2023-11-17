import React from "react"
import { Link } from "react-router-dom"


const Megabarra = () => {
    return (
<>


<div className='timeline-fondobarra'>
      <ul className='rrr'>
        <li>
          <Link className='navrr' to='/'>
            Inicio
          </Link>
        </li>
        <li>
          <Link className='navrr' to='/energia-solar'>
            Energía Solar 
          </Link>
        </li>
        <li>
          <Link className='navrr' to='/energia-eolica'>
            Energía Eólica
          </Link>
        </li>
        <li>
          <Link className='navrr' to='/timeline'>
            Timeline
          </Link>
        </li>
       
        <li>
          <Link className='navrr' to='/login'>
            Login
          </Link>
        </li>
        <li>
          <Link className='navrr' to='/signup'>
            Signup
          </Link>
        </li>
      </ul>
      </div>

</>
)

}
export default Megabarra
