import Card from "../../components/Card/Card"
import React, { Component } from "react"
class ResultadoBusqueda extends Component {

    constructor() {
        super()
        this.state = {
            resultadosTotales: []
        }
    }

    componentDidMount() {


        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.search}&api_key=ac76fd343a62a48054382d87b2a93a32`)
            .then(res => res.json())
            .then(data => this.setState({ resultadosTotales: data.results, }))
            .catch(e => console.log(e))
    }

    render() {
        return (


            <React.Fragment>

                <h1 className="titulos"> Resultado de busqueda </h1>
                <React.Fragment>

                    <h1 className="ultimo" >       Peliculas       </h1>
                </React.Fragment>
                {
                    this.state.resultadosTotales.length !== 0 ?
                        <React.Fragment>
                            <section className="imagen">

                                {this.state.resultadosTotales.map((elemento, index) => <Card key={elemento = index} movie={elemento} />)}
                            </section>

                        </React.Fragment>
                        : <>
                            <React.Fragment>
                                <h1> No hay resultados en tu busqueda: {this.props.match.params.search} </h1>
                            </React.Fragment>
                        </>

                }

            </React.Fragment>
        )
    }
}

export default ResultadoBusqueda