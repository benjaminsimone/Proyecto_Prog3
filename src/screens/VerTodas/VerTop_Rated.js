import './VerTodas.css'
import React,{Component} from 'react';
import Card from '../../components/Card/Card';
import Filtro from '../Filtro/Filtro';


class VerTop_Rated extends Component{
    constructor(props){
        super(props)
        this.state = {
            top_rated:[]
        }

    }
    componentDidMount(){
        
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=ac76fd343a62a48054382d87b2a93a32')
        .then(res=>res.json())
        .then(data=>this.setState({top_rated:data.results}))
        .catch(e=> console.log(e))
    }
    filtrarPeliculas(peliculaAFiltrar){
        let peliculasFiltradas = this.state.top_rated.filter(function(unaPelicula){
             return peliculaAFiltrar.includes(unaPelicula.title)
        })

        this.setState({
            populares: peliculasFiltradas
        })
    }
    render(){
        return(
            <React.Fragment>
                <Filtro filtrar={(texto) => this.filtrarPeliculas(texto)}/>
            {/* {
                this.state.populares.map(function(unaPelicula){
                    return <Card key={unaPelicula.id} datosPelicula={unaPelicula}/>
                }) 
            } */}
            <h1 className="ultimo">Peliculas más valoradas</h1> 
            <section className="imagen">
                {this.state.top_rated.length > 0 ?(
                this.state.top_rated.slice(0,20).map((movie)=><Card movie={movie}/>)
            ):(
                <p className='cargando'>Cargando...</p>
            )}
            </section>
            </React.Fragment>


        )
    }
}


export default VerTop_Rated


