import Card from "../../components/Card/Card"
import Filtro from "../Filtro/Filtro"
import React, { Component } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

class ResultadoBusqueda extends Component {

    constructor(props) {
        super(props)
        this.state = {
            resultadosTotales: []
        }

    }

    componentDidMount() {

        fetch('https://api.themoviedb.org/3/movie/popular?api_key=ac76fd343a62a48054382d87b2a93a32')
            .then(res => res.json())
            .then(data => this.setState({ resultadosTotales: data.results }))
            .catch(e => console.log(e))

        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=ac76fd343a62a48054382d87b2a93a32')
            .then(res => res.json())
            .then(data => this.setState({ resultadosTotales: data.results }))
            .catch(e => console.log(e))
    }
    render() {
        return (
            <React.Fragment>
                {
    this.state.resultadosTotales.length !== null ?(<React.Fragment>
        <h1> Resultado de busqueda </h1>
        <h2> Peliculas </h2>
    <Link to={`/resultadoBusqueda/${this.state.resultadosTotales}`} className="detalle"> </Link>
    
    </React.Fragment>):<h1>No se encontraron resultados</h1>
            
    
    
                }
            
            </React.Fragment>
        )
    }
}

export default ResultadoBusqueda