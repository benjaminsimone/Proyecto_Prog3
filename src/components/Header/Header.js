import React from "react";
import './Header.css'
import { Link } from 'react-router-dom';


function Header (){
    return(
        <header>


    <section>
       
        <div>
            <a href="/"><img src="./img/logo.png" alt="LogoDHMovies" className="logo"/></a>
            
            <section className="barra">
                <form>
                    <input type="text" id="input" placeholder="Buscar en DH Movies" className="buscador" name = "search" value = ""/> {/*completar con el link correspondiente */}
    
                    <button type="submit" id="search" className="bordelupa">
                        <img src="./img/lupa.png" alt="" className="lupa"/>
                    </button>
                </form>
            </section>

               

       
            <nav>
                <ul className="inicio"> {/*completar con el link correspondiente pero de top rated y populares en vez de favoritos y generos */}
                    <li><a className="inicio" href="/">HOME</a></li>
                     <li><a className="inicio" href="./favoritos.html">FAVORITOS</a></li> {/*completar con el link correspondiente */}
                    <li><a className="inicio" href="./generos.html">GENEROS</a></li> {/*completar con el link correspondiente */}
                </ul>
            </nav>
            
        </div>
    </section>


</header>
    )
}

export default Header 
