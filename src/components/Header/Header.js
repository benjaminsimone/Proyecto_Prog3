import React from "react";
import './Header.css'
import { Link } from 'react-router-dom';
import Formulario from "../Formulario/Formularios";


function Header() {
    return (
        <header>
            <section>

                <div>
                    <a href="/"><img src="./img/logo.png" alt="LogoDHMovies" className="logo" /></a>

                    <section className="barra">

                        <Formulario />

                    </section>

                    <nav>

                        <ul className="inicio">

                            <li><Link to="/" className="inicio"> HOME </Link></li>

                            <li><Link to="/Favoritos" className="inicio"> FAVORITOS </Link></li>
                            <li><Link to="/VerTop_Rated" className="inicio"> TOP RATED </Link></li>
                            <li><Link to="/VerPopulares" className="inicio"> MAS POPULARES </Link></li>
                            
                        </ul>

                    </nav>

                    <section className="imagen"></section>
                </div>
            </section>


        </header>
    )
}

export default Header 
