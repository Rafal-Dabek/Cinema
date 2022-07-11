import React, { Component } from 'react';
import  { useState} from 'react';
import {Link } from "react-router-dom";
import "./style.css"
import "./FormInput"
import FormInput from './FormInput';


export const HomePage=()=>{
    const [values,setValues]=useState({
        mail:"",
        password:"",
    })
    
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [mailValid, setMailValid] = useState(false);
    const togglePassword = () => {
        
        setPasswordShown(!passwordShown);
      };
      
    
      function isValid(e) {//checks if password and mail are correct
        
       
        if(e.target.name==="mail"){//checks if mail is correct
            if(/\S+@monterail.com/.test(e.target.value)){
                setMailValid(true);
                
        }    
      }
      if(e.target.name==="password"){//checks if password is correct
        const passwordInputValue = e.target.value;
      
        const digitsTest = /\d/;
        const lettersTest = /[a-zA-Z]/;
        const passwordLength = passwordInputValue.length;
        
        const digitsPassword =  digitsTest.test(passwordInputValue);
        const lettersPassword =  lettersTest .test(passwordInputValue);
        if((passwordLength>=8 )&& digitsPassword &&lettersPassword &&!passwordValid) {
           
            setPasswordValid((prevState,props)=>(  //changes the passwordValid property
                {
                    value:!passwordValid
                })

            )
            
            
    }  // realtime password validation
    
        digitsPassword? document.getElementById("digit").style.color = "green" : document.getElementById("digit").style.color = "red"; //checks if there is a digit in password 
        
        (passwordLength>=8)? document.getElementById("characters").style.color = "green" : document.getElementById("characters").style.color = "red"; //checks if there are 8 characters in password 
        
        lettersPassword? document.getElementById("letter").style.color = "green" : document.getElementById("letter").style.color = "red";//checks if there is a letter in password 
    }
    
    }
    

   

const inputs=[
    {
        id:1,
        name:"mail",
        type:"email",
        placeholder:"Something ending with monterail.com",
        label:"Mail",
        pattern:".+@monterail.com",
        required:true,
        
    },
    {
        id:2,
        name:"password",
        type: passwordShown ? "text" : "password",
        placeholder:"Enter your password",
        label:"Password",
        required:true,
        
    }
]




const onChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
    isValid(e)
   
}



   
    return(
        <div className='container'>
               
        <p id='darkSentence'>Ahoy you!</p> 
        <p id='graySentence'>Care to register?</p> 
            
 
            <div className='card' id='card'>
            
                
                
                <form>
                    {inputs.map((input)=>(
                        <FormInput key={input.id}
                         {...input} 
                        value={values[input.name]} 
                         onChange={onChange}
                         />

                    ))}
                    <p className='helper' id='characters'>At least 8 characters</p>
                    <p className='helper' id='letter'>At least one letter</p>
                    <p className='helper' id='digit'>At least one digit</p>
                   {/* <button onClick={togglePassword} id="passwordButton">Show Password</button>  not working correctly*/} 
                    <div className='buttonDiv'>
                    <button className='logIn' >Log in instead</button>
                    
                    <Link to="/SecondStep" state={values}>
                    <button className='nextStep' type="submit" disabled={!(mailValid&&passwordValid)}  > Next step</button> {/*is only disabled when both password and mail are incorrect */}
                    </Link>
                    </div>
                    
                </form>
            </div>
            
        </div>
    )
}