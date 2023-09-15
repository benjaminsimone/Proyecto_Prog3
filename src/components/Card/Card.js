import React, { Component } from "react";
import { Link } from "react-router-dom"
import "./Card.css"

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ver_mas: false,
            botonFavs: "Agregar a favoritos",
            descripcion : props.movie.overview
        }

    }

    componentDidMount() {

        let recuperoStorage = localStorage.getItem("favoritos");

        if (recuperoStorage !== null) {
            let favoritos = JSON.parse(recuperoStorage);
            if (favoritos.includes(this.props.movie.id)) {
                this.setState({
                    botonFavs: "Quitar de Favoritos"
                })
            }
        }
    }
    agregarQuitarFavs(id) {
        let favoritos = []
        let recuperarStorage = localStorage.getItem("favoritos")
        if (recuperarStorage !== null) {
            favoritos = JSON.parse(recuperarStorage)
        }
        if (favoritos.includes(id)) {
            favoritos = favoritos.filter(unId => unId !== id)
            this.setState({
                botonFavs: " Agregar a favoritos "
            })
        }
        else {
            favoritos.push(id)
            this.setState({
                botonFavs: "Quitar de favoritos"
            })
        }
        let favoritoString = JSON.stringify(favoritos)
        localStorage.setItem("favoritos", favoritoString)
    }
    mostrar_descripcion() {
        this.setState({
            ver_mas: !this.state.ver_mas
        })
    }

    render() {

        return (
            <div>
                <li className="peliculas">
                    <img src={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`} className="peliculas" alt="Imagen cartelera" />
                    <h4>{this.props.movie.title}</h4>
                    <h5>{this.props.movie.release_date}</h5>
                    <h5 >{this.state.ver_mas ? this.state.descripcion : ''} </h5>
                    <h5 onClick={() => this.mostrar_descripcion()}>{this.state.ver_mas ? 'No mostrar' : 'Ver más'}</h5>
                    <Link to={`/detalle/${this.props.movie.id}`} className="detalle"> Ir a Detalle </Link>
                    <button onClick={()=>this.agregarQuitarFavs(this.props.movie.id)} type='button'>{this.state.botonFavs}</button>
                </li>
            </div>

        )

    }
}

export default Card