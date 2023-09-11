import React from "react";
import './Footer.css'

function Footer(){
    return(
        <footer>
    <hr className="linea"/>
    <a className="footerpadding" href="./index.html"><img src="./img/tmbd.svg" alt="logoTMB" className="logofooter"/></a>
    <h4 className="paddingtopfooter">Benjamin Simone | Juan Bautista Medici  | Mateo Iriarte</h4>
    <h4 className="paddingbottomfooter">Copyrigth Ⓒ 2023 DH Movies</h4>
</footer>
    )
}

export default Footer