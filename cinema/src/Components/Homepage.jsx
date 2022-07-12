import React, { Component } from 'react';
import  { useState} from 'react';
import {Link } from "react-router-dom";
import "./style.css"
import "./FormInput"
import FormInput from './FormInput';
import eye from './eye.svg';


export const HomePage=()=>{
    const [values,setValues]=useState({
        mail:"",
        password:"",
    })
    
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [mailValid, setMailValid] = useState(false);
    const togglePassword = (e) => {
        e.preventDefault();
        setPasswordShown(!passwordShown);
      };
      
    
      function isValid(e) {//checks if password and mail are correct
        
       
        if(e.target.id==="mail"){//checks if mail is correct
            (/\S+@monterail.com/.test(e.target.value))? setMailValid(true) : setMailValid(false) 
            
              
      }
      if(e.target.id==="password"){//checks if password is correct
        const passwordInputValue = e.target.value;
      
        const digitsTest = /\d/;
        const lettersTest = /[a-zA-Z]/;
        const passwordLength = passwordInputValue.length;
        
        const digitsPassword =  digitsTest.test(passwordInputValue);
        const lettersPassword =  lettersTest .test(passwordInputValue);

        ((passwordLength>=8 )&& digitsPassword &&lettersPassword )? 
           
            setPasswordValid((prevState,props)=>(  //changes the passwordValid property
                {
                    value:true
                }))
                :setPasswordValid(false)//changes the passwordValid back to false if it is incorrect again

        
            
            
    

       
    
    // realtime password validation
    
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
                    <div>
                    {/*inputs.map((input)=>(
                        <FormInput key={input.id}
                         {...input} 
                        value={values[input.name]} 
                         onChange={onChange}
                         />

                    )) */}


<div className='formInput'>
    <label>Mail</label>
    <input  onChange={onChange} type="email" required="true"  id="mail" placeholder="Something ending with monterail.com" />
</div>
<div className='formInput' id="bottomForm">
    <label>password</label>
    <input  onChange={onChange} type={passwordShown ? "text" : "password"} id="password"  required="true" placeholder="Enter your password" />
    <img onClick={togglePassword} id="passwordButton" src={eye}></img> 
</div>


                    
                    </div>
                   
                 
                    <p className='helper' id='characters'>At least 8 characters</p>
                    <p className='helper' id='letter'>At least one letter</p>
                    <p className='helper' id='digit'>At least one digit</p>
                     
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