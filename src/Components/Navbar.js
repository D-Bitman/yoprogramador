import React from 'react'

import logo from "../images/logoblanco.svg"

const Navbar = () => {
    return (
      
            <nav className="navbar">
            <div className="navbar__container ">
            <div className="navbar__logo">
                <a href="#" className="navbar__logo--a"><img src={logo} alt="portada" /></a>
            </div>          
            </div>
            </nav>
        
    )
}

export default Navbar
