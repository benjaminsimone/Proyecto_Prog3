import React,{Component} from 'react';
import Card from "../../components/Card/Card";



class Home extends Component {
    constructor(){
        super();
        this.state = {
            populares:[],
            top_rated:[],
        }
    }
    componentDidMount(){
        
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=b3c4e9f716ea1c455601574fe492773b&language=en-US&page=1')
        .then(response =>response.json) 
        .then(info=>this.setState({populares:info.results}))
        .catch(e=> console.log(e))

        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=b3c4e9f716ea1c455601574fe492773b&language=en-US&page=1")
        .then(response=>response.json)
        .then(info=>this.setState({top_rated:info.results}))
        .catch(e=> console.log(e))

    }
    render(){
        return(
            <React.Fragment>
            
            <h2 className="titulos">HOME</h2>

            <h2 className="ultimo">Peliculas populares</h2>
            <section className="imagen">
                {this.state.populares.length > 0 ?(
                this.state.populares.slice(0,5).map((movie)=><Card movie={movie}/>)
            ): (
                <p>Cargando...</p>
            )}
            </section>

            
            
            </React.Fragment>
            
            
            
            )

    }
}

export default Home