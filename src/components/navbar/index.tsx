import React from 'react'
import './index.css'
import NavImg from '../../assets/images/logonav.png'

const NavBar = () => {
    return (
        <div className="navbar-container">
            <img src={NavImg}/>
            <div className="navbar-container-title">
                Crea tu skate
            </div>
        </div>
    )
}

export default NavBar
