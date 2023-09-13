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
        return (<Card movie = {this.state.detailMovie}  />)
    }
}


export default Detail; 