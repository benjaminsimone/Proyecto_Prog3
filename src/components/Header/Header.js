import React from "react";
import './Header.css'

function Header (){
    return(
        <header>


    <section>
       
        <div>
            <a href="./index.html"><img src="./img/logo.png" alt="LogoDHMovies" className="logo"/></a>
            
            <section className="barra">
                <form>
                    <input type="text" id="input" placeholder="Buscar en DH Movies" className="buscador" name = "search" value = ""/>
    
                    <button type="submit" id="search" className="bordelupa">
                        <img src="./img/lupa.png" alt="" className="lupa"/>
                    </button>
                </form>
            </section>

       <button className="botonDark">Aclarar fondo</button>         

       
            <nav>
                <ul className="inicio">
                    <li><a className="inicio" href="./index.html">HOME</a></li>
                    <li><a className="inicio" href="./favoritos.html">FAVORITOS</a></li>
                    <li><a className="inicio" href="./generos.html">GENEROS</a></li>
                </ul>
            </nav>
            
        </div>

    </section>


</header>
    )
}

export default Header 
