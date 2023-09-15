import './VerTodas.css'
import React,{Component} from 'react';
import Card from '../../components/Card/Card';
import Filtro from '../Filtro/Filtro';

class VerPopulares extends Component{
    constructor(props){
        super(props)
        this.state = {
            populares:[]
        }

    }
    componentDidMount(){
        
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=ac76fd343a62a48054382d87b2a93a32')
            .then(res =>res.json()) 
        .then(data=>this.setState({populares:data.results}))
        .catch(e=> console.log(e))
    }
    filtrarPeliculas(peliculaAFiltrar){
        let peliculasFiltradas = this.state.populares.filter(function(unaPelicula){
             return unaPelicula.title.includes(peliculaAFiltrar)
        })

        this.setState({
            populares: peliculasFiltradas
        })
    }
    render(){
        return(
            <React.Fragment>
                
            {/* {
                this.state.populares.map(function(unaPelicula){
                    return <Card key={unaPelicula.id} datosPelicula={unaPelicula}/>
                }) 
            } */}
            <h1 className="ultimo"> Peliculas populares </h1>  
                <Filtro filtrar={(texto) => this.filtrarPeliculas(texto)}/>
            <section className="imagen">
                {this.state.populares.length > 0 ?(
                this.state.populares.slice(0,20).map((movie)=><Card movie = { movie }/>)
            ):(
                <p className='cargando'>Cargando...</p>
            )}
            </section>
            </React.Fragment>


        )
    }
}


export default VerPopulares
