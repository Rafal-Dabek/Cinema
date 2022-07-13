import React, { Component } from 'react';
import  { useState} from 'react';
import { useLocation,Link } from 'react-router-dom';
import "./style.css"
import "./FormInput"
import FormInput from './FormInput';
export const RegisterSecondStep=()=>{
    const [values,setValues]=useState({
        first_name:"",
        last_name:"",
        date_of_birth:"",
    })

    const [ageValid, setAgeValid] = useState(false);
    const [checked, setChecked] = useState(false);
    const [fnameValid, setfnameValid] = useState(false);
    const [lnameValid, setlnameValid] = useState(false);
    const location = useLocation();
const prevdata = location.state;//prevdata from prewious page
let data={   //date which is passed to next page
  mail:prevdata.mail,
  first_name:values.first_name
}

function getAge(dateString) {//checks the age of a person
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function isValid(e) {  //checks if a person is 18 or older
   
    
    if(e.target.id==="date_of_birth"){
        (getAge(e.target.value)>=18)? document.getElementById("over18yo").style.color = "green" : document.getElementById("over18yo").style.color = "red";
        (getAge(e.target.value)>=18)? setAgeValid(true) : setAgeValid(false) //checks if age is correct
         
       
    }
    if(e.target.id==="first_name"){//checks if firstname is correct
        
            (/^[A-Z][a-z0-9_-]{1,19}$/.test(e.target.value))? setfnameValid(true) : setfnameValid(false) 
            
       }

    if(e.target.id==="last_name"){//checks if lastname is correct
        
            (/^[A-Z][a-z0-9_-]{1,19}$/.test(e.target.value))? setlnameValid((prevState,props)=>(  //changes the lastnameValid property
            {
                value:true
            })) : setlnameValid(false) 
            
     

}
   
}

function changeCheckerValid(){
    (document.getElementById("privacyPolicyCheckbox").checked)? setChecked(true) : setChecked(false)
    
}


const onChange=(e)=>{
    setValues({...values,[e.target.id]:e.target.value})
    isValid(e)
}

    
    return(
        <div className='container'>
           <p id='darkSentence'>Great!</p> 
           <p id='graySentence'>Now your name</p> 
            <div className='card' id='card'>
                
                
                
                <form>
                    {/*inputs.map((input)=>(
                        <FormInput key={input.id}
                         {...input} 
                        value={values[input.name]} 
                         onChange={onChange}
                         />

                    ))*/}

<div className='formInput'>
    <label>First name</label>
    <input  onChange={onChange} type="text" required={true}   id="first_name" placeholder="e.g. Jessica" />
</div>
<div className='formInput' >
    <label>Last Name</label>
    <input  onChange={onChange} type= "text"  id="last_name"  required={true}  placeholder="e.g. Walton" />
</div>
<div className='formInput' >
    <label>Date of birth</label>
    <input  onChange={onChange} type= "date"  id="date_of_birth"  required={true}   />
</div>



                    <p id="over18yo" className='helper'>You should be minimum 18 years old</p>
                    <span id="privacyPolicy"><input type="checkbox" id="privacyPolicyCheckbox" required onClick={changeCheckerValid} />
                    <label for="checkbox" id="privacyPolicyLabel"  > I accept <a id="privacyPolicyLink" href='#'>Privacy Policy</a></label></span>
                    <br></br>
                    <div className='buttonDiv'>
                    <button className='logIn'>Log in instead</button>
                    <Link to="/Succes" state={data}>
                    <button className='nextStep' disabled={!( checked && fnameValid && lnameValid && ageValid)}> Next step</button>
                    </Link>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}