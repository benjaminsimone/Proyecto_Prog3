import React,{Component} from "react";

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            ver_mas: false,
            descripcion: props.movie.overview
        }
    }
    mostrar_descripcion(){
        this.setState({
            ver_mas:this.state.ver_mas
        })
    }

    render(){
        return(
            <div>
            <li className="peliculas">
            <img src={this.props.movie.poster_path} className="peliculas"/>
            <h4>${this.props.movie.title}</h4>
            <h5>${this.props.movie.release_date}</h5>    
            </li>
            </div>


        )
    }
}

export default Card