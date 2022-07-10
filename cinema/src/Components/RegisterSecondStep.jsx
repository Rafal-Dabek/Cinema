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
        isAnAdult:false,
    })

    const [ageValid, setAgeValid] = useState(false);
    const location = useLocation();
const prevdata = location.state;//prevdata from prewious page
let data={   //date which is passed to next page
  mail:prevdata.mail,
  first_name:values.first_name
}
const inputs=[
    {
        id:1,
        name:"first_name",
        type:"text",
        placeholder:"e.g. Jessica",
        label:"First name",
        required:true,
    },
    {
        id:2,
        name:"last_name",
        type:"text",
        placeholder:"e.g. Walton",
        label:"Last Name"
    },
    {
        id:3,
        name:"date_of_birth",
        type:"date",
        placeholder:"DD / MM / YYYY",
        label:"Date of birth",
        required:true,
    }
]
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
    if(e.target.name==="date_of_birth"){
        (getAge(e.target.value)>=18)? document.getElementById("over18yo").style.color = "green" : document.getElementById("over18yo").style.color = "red";
        setAgeValid(!ageValid);
        console.log(ageValid)
    }
    

}

const onChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
    isValid(e)
}

    
    return(
        <div className='container'>
           <p id='darkSentence'>Great!</p> 
           <p id='graySentence'>Now your name</p> 
            <div className='card' id='card'>
                
                
                
                <form>
                    {inputs.map((input)=>(
                        <FormInput key={input.id}
                         {...input} 
                        value={values[input.name]} 
                         onChange={onChange}
                         />

                    ))}
                    <p id="over18yo" className='helper'>You should be minimum 18 years old</p>
                    <span id="privacyPolicy"><input type="checkbox" id="privacyPolicyCheckbox" required />
                    <label for="checkbox" id="privacyPolicyLabel"  > I accept <a id="privacyPolicyLink" href='#'>Privacy Policy</a></label></span>
                    <br></br>
                    <div className='buttonDiv'>
                    <button className='logIn'>Log in instead</button>
                    <Link to="/Succes" state={data}>
                    <button className='nextStep' /*disabled={!ageValid}*/> Next step</button>
                    </Link>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}