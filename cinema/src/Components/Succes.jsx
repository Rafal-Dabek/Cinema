import React, { Component } from 'react';
import  { useState} from 'react';
import {Link ,useLocation} from "react-router-dom";
import "./style.css"
export const Succes=()=>{
   
    const location = useLocation();
    const data = location.state;
 
    return(
        <div className='container'>
           
           <p id='graySentence'>Good job {data.first_name}!</p> 
            <div className='card' id='card'>
                
                <p className='text'>We have sent you an email to &nbsp; 
                    <b>{data.mail}.</b>&nbsp; <br></br>
                        Make sure to click the link from the message to activate your account. 
                </p>
                
               
                    <Link to="/">
                    <button className='nextStep' id='Homebutton' > Go to homepage</button>
                    </Link>
                    </div>
                    
               
            </div>
        
    )
}