import { Chrono } from 'react-chrono'
import './Timeline_2.css'
import items from './data'
import Megabarra from '../megabarra/megabarra'



const Timeline = () => {
 return (
    <>
    
    <Megabarra />

      <div className='Timeline'>
        <div style={{ width:'100%', heigth: '95vh'}}>
        
        <Chrono 
            
          items={items}
           mode='VERTICAL_ALTERNATING'
           cardHeight={500}
           cardWidth={650}
           mediaHeight={500}
           scrollable={{ scrollbar: false }}
          contentDetailsHeight={100}
          slideShow
         
          />
         
         
         
           
         </div>
      </div>
      
    </>
  )
}

export default Timeline
