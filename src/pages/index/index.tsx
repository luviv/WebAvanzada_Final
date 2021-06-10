import React from 'react'
import Logo from '../../assets/images/logo.png'
import './index.css'
import {
    Link
  } from "react-router-dom";

function index() {
    return (
        <div className="index-container">
            <div className="index-container-logo">
                <img src={Logo}/>
                <button><Link to="/shop" style={{textDecoration:'none',color:'white'}}>CONTINUAR</Link></button>
            </div>
        </div>
    )
}

export default index
