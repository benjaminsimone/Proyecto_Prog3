import React, { Component } from "react";
import Card from "../../components/Card/Card";
import './Detail.css'

class Detail extends Component {
    constructor(props) {
        super(props)

        let id = props

        this.state = {
            detailMovie: []
        }
    }
    componentDidMount() {

        fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=ac76fd343a62a48054382d87b2a93a32`)
            .then(res => res.json())
            .then(data => this.setState(
                {detailMovie: data}))
            .catch(e => console.log(e))
            
    }
    render(){ 
        return(<p> Mundo </p>)
    }
}


export default Detail; 