import './VerTodas.css'
import React,{Component} from 'react';
import Card from '../../components/Card/Card';
import Filtro from '../Filtro/Filtro';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


class VerTop_Rated extends Component{
    constructor(props){
        super(props)
        this.state = {
            top_rated:[],pagina:1,index: 5
        }

    }

    componentDidMount() {
        this.variasPelis()
    }

    variasPelis() {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=ac76fd343a62a48054382d87b2a93a32&page=${this.state.pagina}`)
            .then(res => res.json())
            .then(data => this.setState(
                {
                    top_rated:data.results,
                    pagina: this.state.pagina + 1,
                    index: 10
                }

            ))
            .catch(e => console.log(e))
    }

    filtrarPeliculas(peliculaAFiltrar){
        let peliculasFiltradas = this.state.top_rated.filter(function(unaPelicula){
             return peliculaAFiltrar.includes(peliculaAFiltrar)
        })

        this.setState({
            top_rated: peliculasFiltradas
        })
    }
    otrasPeliculas() {
        this.setState({
            idx: this.state.idx + 5
        })
       this.variasPelis()
    }
    render(){
        return(
            <React.Fragment>
            {/* {
                this.state.populares.map(function(unaPelicula){
                    return <Card key={unaPelicula.id} datosPelicula={unaPelicula}/>
                }) 
            } */}
            <h1 className="ultimo"> Peliculas más valoradas </h1>
            <button onClick={() => this.otrasPeliculas(this.state.top_rated)}>Otras peliculas altamente valoradas</button>
            <Link to={`/VerTop_Rated/${this.state.valor}`}><Filtro filtrar={(texto) => this.filtrarPeliculas(texto)}/><img src="./img/lupa.png" alt="" className="lupa" /></Link>
 
            <section className="imagen">
                    {this.state.top_rated.length > 0 ? (

                        this.state.top_rated.map((movie, indice) => {
                            if (indice < this.state.index) {
                                return (
                                    <Card movie={movie} />
                                )
                            }
                        })

                    ): (<p className='cargando'>Cargando...</p>)}
                </section>

            </React.Fragment>


        )
    }
}


export default VerTop_Rated


