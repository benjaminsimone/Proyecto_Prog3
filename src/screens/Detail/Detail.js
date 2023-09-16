import React, { Component } from "react";
import './Detail.css'

class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detailMovie: [],
            genres:[],
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ac76fd343a62a48054382d87b2a93a32`)

            .then(res => res.json())

            .then(data => this.setState(

                { detailMovie: data,
                genres: data.genres.map(genre => genre.name)
                }
            ))

            .catch(e => console.log(e))
    }

        


        render() {
            console.log(this.state.generos)
            return (

                <React.Fragment>

                    <img src={`https://image.tmdb.org/t/p/w500${this.state.detailMovie.poster_path}`} className="peliculas" alt="Imagen cartelera" />
                    <h1> {this.state.detailMovie.title} </h1>
                    <h2> Estreno : {this.state.detailMovie.release_date}</h2>
                    <h2> Rating: {this.state.detailMovie.vote_average}</h2>
                    <h2> {this.state.detailMovie.overview}</h2>
                    <h2> Duracion : {this.state.detailMovie.runtime} mins </h2>
                    <h2> Genero : {this.state.genres.join(', ')} </h2>
                    
                    


                </React.Fragment>

            )
        }
    }


export default Detail;

