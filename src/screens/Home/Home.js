import React,{Component} from 'react';
import Card from "../../components/Card/Card";
import './Home.css'


class Home extends Component {
    constructor(){
        super()
        this.state = {
            populares:[],
            top_rated:[],
        }
    }
    componentDidMount(){
        
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=ac76fd343a62a48054382d87b2a93a32')
            .then(res =>res.json()) 
        .then(data=>this.setState({populares:data.results}))
        .catch(e=> console.log(e))

        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=ac76fd343a62a48054382d87b2a93a32')
        .then(res=>res.json())
        .then(data=>this.setState({top_rated:data.results}))
        .catch(e=> console.log(e))

    }
    render(){
        return(
            <React.Fragment>
            
            <h2 className="titulos">HOME</h2>

            <h2 className="ultimo">Peliculas populares</h2>
            <section className="imagen">
                {this.state.populares.length > 0 ?(
                this.state.populares.slice(0,4).map((movie)=><Card movie={movie}/>)
            ):(
                <p className='cargando'>Cargando...</p>
            )}
            </section>

            <h2 class="ultimo">Peliculas mas valoradas</h2>
            <section className="imagen">
                {this.state.top_rated.length > 0 ?(
                this.state.top_rated.slice(0,4).map((movie)=><Card movie={movie}/>)
            ):(
                <p className='cargando'>Cargando...</p>
            )}
            </section>



            
            
            </React.Fragment>
            
            
            
            )

    }
}

export default Home