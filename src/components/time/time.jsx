import React from "react";
import '../time/time.css'

const Time = (props) =>{
    return( 
   
      
<div className="col  ">
    <div className="text-center bgg">
      <div className="rtr ">
         <div  className="eee">
        <img src={props.img} className="iimgg" alt="profile images" />
        </div>
        <div className="texte-center gtg" >
        <h4>{props.description}</h4>
        <h4 className="text-center"> {props.id}   </h4>   
        </div>
    </div>
  </div>
  

   
  
  </div>



 );
 };


 export default Time;
