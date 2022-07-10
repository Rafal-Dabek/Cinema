import React from 'react';
import {Link } from "react-router-dom";
//import {data1} from './components/BasicTable';
import logo from './logo.png';
import love from './love.png';
import "./style.css"
export const Header=()=>{
    return(
        <header className='header'>
            
                    <img src={logo} id="logo" alt="Monterail Logo"></img>
                    <p id='love'></p>
                    <img src={love} id="love"></img>
        </header>
    )
}