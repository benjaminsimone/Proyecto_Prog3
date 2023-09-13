import Card from "../../components/Card/Card"
import Filtro from "../Filtro/Filtro"
import React, { Component } from "react"

class ResultadoBusqueda extends Component { 

    constructor(props) { 
        super(props)
        this.state = { 
            resultados : []
        }

    }
        
    componentDidMount() {

        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.search}&api_key=ac76fd343a62a48054382d87b2a93a32`)
            .then(res => res.json())
            .then(data => this.setState(
                { resultados: data.results }))
            .catch(e => console.log(e))
            console.log(this.state.resultados);

    }
    render(){
        console.log(this.state.resultados)
        return(
            <React.Fragment>
                <h1> Resultado de busqueda </h1>
                <h2> Peliculas </h2>
                
            </React.Fragment>
        )
    }
}

export default ResultadoBusqueda