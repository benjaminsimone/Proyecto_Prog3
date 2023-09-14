import React , {Component} from "react";
import Card from "../../components/Card/Card";


class Favoritos extends Component { 
    constructor(props) {
        super (props)
        this.state = {
            arrayFavoritos : []
        }
    }

    componentDidMount(){
        let favoritos = [];
        let recuperarStorage = localStorage.getItem('favoritos')
        if (recuperarStorage !== null){
            favoritos = JSON.parse(recuperarStorage)
        }
        favoritos.map((id)=>{
            fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=ac76fd343a62a48054382d87b2a93a32')
            .then((response)=>response.json())
            .then((arrayFavoritos) =>{
                let listaFavs = this.state.arrayFavoritos;
                listaFavs.push(arrayFavoritos);
                this.setState({arrayFavoritos: listaFavs})
            })
            .catch((error)=>console.log(error))

        return true
        })

    }

    render(){
        return(
            <React.Fragment>
                <h1>Tus Favoritos</h1>
                <div>
                    {this.state.arrayFavoritos.map((PeliculaFavorita, idx)=> <Card key={PeliculaFavorita.id} infoPelicula={PeliculaFavorita}/>)}
                </div>
            </React.Fragment>
        )
    }
}

export default Favoritos; 
