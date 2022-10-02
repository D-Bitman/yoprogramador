import React from 'react';
import Navbar from "./Navbar"
import portada from "../images/portada.svg"

const Header = () => {

    return (
        <div>
            <Navbar />
            <div className="home">
            <div className="name-container">
                <div className="about__content">
                <article className="about__content about__content--1"><img src={portada} alt="" />
                </article>
                <div className="about__content about__content--2">
               
                <div className="name">

               
                  <p >Me alegra muchisimo presentarte mi segundo ebook:</p>
                  <h1 ><i>"Mi Experiencia como programador después de los 40's"</i></h1>
                  <p >Por Gerardo Arrieta</p><br />
                  <p >Acá describo como ha sido mi experiencia a lo largo de un par de años hasta conseguir mi primer empleo como Desarrollador de Software. Te dejo acá el botón de compra:
                  </p><br />
                  <a className ="link__home" href="https://gerardojao.gumroad.com/l/qtelts"
                  target="_blank" rel="noopener noreferrer">Cómpralo Ya!</a>
                   
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>

    );
};

export default Header;