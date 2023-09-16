import React from "react";
import './Footer.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function Footer(){
    return(
        <footer>
    <hr className="linea"/>
    <Link to="/"><img src="./img/tmbd.svg" alt="logoTMB" className="logofooter"/></Link>    
    <h4 className="paddingtopfooter">Benjamin Simone | Juan Bautista Medici  | Mateo Iriarte</h4>
    <h4 className="paddingbottomfooter">Copyrigth Ⓒ 2023 DH Movies</h4>
</footer>
    )
}

export default Footer