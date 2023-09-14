import React, { Component } from "react";
import Card from "../../components/Card/Card";
import './Detail.css'

class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detailMovie: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ac76fd343a62a48054382d87b2a93a32`)
            .then(res => res.json())
            .then(data => this.setState(
                { detailMovie: data }))
            .catch(e => console.log(e))

    }
    render() {
 
        return (
        
            <React.Fragment>

                <img src={`https://image.tmdb.org/t/p/w500${this.state.detailMovie.poster_path}`} className="peliculas" alt="Imagen cartelera"/>
                <h2>Release Date: {this.state.detailMovie.release_date}</h2>
                <h2>Vote Average: {this.state.detailMovie.vote_average}</h2>
                <h2> Descripcion: {this.state.detailMovie.overview}</h2>

            </React.Fragment>

        )
    }
}


export default Detail; 

// import React, { Component } from "react";
// import Card from "../../components/Card/Card";
// import './Detail.css'

// class Detail extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             detailMovie: []
//         }
//     }

//     componentDidMount() {
//         const id = this.props.match.params.id;
//         fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ac76fd343a62a48054382d87b2a93a32`)
//             .then(res => res.json())
//             .then(data => this.setState({ detailMovie: data }))
//             .catch(e => console.log(e))
//     }

//     render() {
//         const { title, poster_path, overview, genres, release_date, vote_average } = this.state.detailMovie;

//         return (
//             <section>
//                 <div className="descripcion">
//                     {title && poster_path && (
//                         <Card title={this.state.detailMovie.title} posterPath={this.state.detailMovie.poster_path} />
//                     )}
//                     <h2>{this.state.detailMovie.overview}</h2>
//                     {genres && (
//                         <h2>Genres: {this.state.detailMovie.genres.map(genre => genre.name).join(", ")}</h2>
//                     )}
//                     <h2>Release Date: {this.state.detailMovie.release_date}</h2>
//                     <h2>Vote Average: {this.state.detailMovie.vote_average}</h2>
//                 </div>
//             </section>
//         )
//     }
// }

// export default Detail;
