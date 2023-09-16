import './VerTodas.css'
import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import Filtro from '../Filtro/Filtro';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class VerPopulares extends Component {
    constructor(props) {
        super(props)
        this.state = {
            populares: [],
            pagina: 1,
            index: 10
        }

    }
    componentDidMount() {
        this.variasPelis()
    }

    variasPelis() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ac76fd343a62a48054382d87b2a93a32&page=${this.state.pagina}`)
            .then(res => res.json())
            .then(data => this.setState(
                {
                    populares: data.results,
                    pagina: this.state.pagina + 1
                }

            ))
            .catch(e => console.log(e))
    }



    filtrarPeliculas(peliculaAFiltrar) {
        let peliculasFiltradas = this.state.populares.filter(function (unaPelicula) {
            return unaPelicula.title.includes(peliculaAFiltrar)
        })

        this.setState({
            populares: peliculasFiltradas
        })
    }

    otrasPeliculas() {
        this.setState({
            idx: this.state.idx + 5
        })
        this.variasPelis()
    }
    render() {
        return (
            <React.Fragment>

                {/* {
                this.state.populares.map(function(unaPelicula){
                    return <Card key={unaPelicula.id} datosPelicula={unaPelicula}/>
                }) 
            } */}
                <h1 className="ultimo"> Peliculas populares </h1>
                <button onClick={() => this.otrasPeliculas(this.state.populares)}>Ver más peliculas populares</button>
                <Link to={`/VerPopulares/${this.state.valor}`}><Filtro filtrar={(texto) => this.filtrarPeliculas(texto)} /><img src="./img/lupa.png" alt="" className="lupa" /> </Link>

                
            </React.Fragment>


        )
    }
}


export default VerPopulares
