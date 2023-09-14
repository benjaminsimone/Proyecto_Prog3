import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Formulario extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valor: "",
            resultado: []
        }
    }


    preventDefault(evento) {
        evento.preventDefault();
    }

    controDeCambios (evento){
        this.setState({
            valor : evento.target.value
        })

    }
    render(){
        return (
            
                <form onSubmit={(evento) => this.preventDefault(evento)} className='form'>

                    <input type="text" onChange={(evento) => this.controDeCambios(evento) } id="input" placeholder="Buscar en DH Movies" className="buscador" name = "search" value = {this.state.valor}/> {/*completar con el link correspondiente */}
                    <Link to = { `/resultadoBusqueda/${this.state.valor}`}><img src="./img/lupa.png" alt="" className="lupa"/> </Link>
                        
                </form>
        )
    }
}

export default Formulario; 
