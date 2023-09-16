import React, { Component } from 'react';


class Filtro extends Component{

    constructor(props){
        super(props);
        this.state = {
            busquedaIngresada: ''
        }
    }


    controlEnvio(evento){
        evento.preventDefault();
        console.log('no mandaste nada')
        return true
    }

    almacenarInput(eventoInput){
        this.setState({
            valorIngresado: eventoInput.target.value 
        }, ()=> this.props.filtrar(this.state.valorIngresado))
        console.log(this.state.valorIngresado)
    }

    render(){ 
        return(
            <form action="" method='GET' onSubmit={(evento) => this.controlEnvio(evento)}>
                <input type='text' name='filtro' onChange={(eventoInput) => this.almacenarInput(eventoInput)} value={this.state.valorIngresado}></input>
                <button type='submit'> Buscar </button>  
            </form>
        )
    }
}



export default Filtro