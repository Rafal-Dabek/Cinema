import React from 'react';
import {useLocation,useNavigate} from "react-router-dom";
import "./style.css"
export const Succes=()=>{
   
    const location = useLocation();
    const prevdata = location.state.data;
    let navigate = useNavigate();

    const SecondStep = () => {
      
          
          navigate("/");
      
      
    };




    return(
        <div className='container'>
           
           <p id='graySentence'>Good job {prevdata.first_name}!</p> 
            <div className='card' id='card'>
                
                <p className='text'>We have sent you an email to &nbsp; 
                    <b>{prevdata.mail}.</b>&nbsp; <br></br>
                        Make sure to click the link from the message to activate your account. 
                </p>
                
               
                    
                    <button className='nextStep' id='homeButton' onClick={SecondStep} > Go to homepage</button>
                    
                    </div>
                    
               
            </div>
        
    )
}