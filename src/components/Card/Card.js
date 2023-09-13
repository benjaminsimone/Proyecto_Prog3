import React,{Component} from "react";
import {Link} from "react-router-dom"
import "./Card.css"
class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            ver_mas: false,
            descripcion: props.movie.overview
        }
        console.log(this.props.movie.id)

    }
    mostrar_descripcion(){
        this.setState({
            ver_mas:!this.state.ver_mas
        })
    }

    render(){
        
        return(
            <div>
            <li className="peliculas">
            <img src={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`} className="peliculas" alt="Imagen cartelera"/>
            <h4>{this.props.movie.title}</h4>
            <h5>{this.props.movie.release_date}</h5>
            <h5 >{this.state.ver_mas ? this.state.descripcion : ''} </h5>
            <h5 onClick={()=>this.mostrar_descripcion()}>{this.state.ver_mas?'No mostrar':'Ver más'}</h5>
            <Link to= {`/detalle/${this.props.movie.id}`} className="detalle"> Ir a Detalle </Link> 
            </li>
            </div>

        )
        
    }
}

export default Card