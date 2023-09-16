import React, { Component } from "react";
import Card from "../../components/Card/Card";
import "./Favoritos.css"


class Favoritos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrayFavoritos: []
        }
    }

    componentDidMount() {
        let favoritos = [];
        let recuperarStorage = localStorage.getItem('favoritos')
        if (recuperarStorage !== null) {
            favoritos = JSON.parse(recuperarStorage)
            let listaPeliculas = []
        
            favoritos.forEach((id) => {
            
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ac76fd343a62a48054382d87b2a93a32`)
                    .then((response) => response.json())
                    .then((favoritos) => {
                        listaPeliculas.push(favoritos)
                        this.setState({ arrayFavoritos: listaPeliculas })
                    })
                    .catch((error) => console.log(error))
            })
        
        }
        

    }

    render() {
        console.log(this.state.arrayFavoritos)
        return (
                <React.Fragment>

                    <h1>Tus Favoritos</h1>

                    {this.state.arrayFavoritos.length === 0 ?

                    <h1> No tienes favoritos </h1>
                        :
                        <>
                            {
                                <section className="imagen">

                                    {this.state.arrayFavoritos.map((PeliculaFavorita, idx) => <Card key={PeliculaFavorita + idx} movie={PeliculaFavorita} img = {PeliculaFavorita.poster_path}/>)}

                                </section>
                            }

                        </>
                        }

                </React.Fragment>
        )
    }
}

export default Favoritos; 
