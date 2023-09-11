import React from "react";
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import Home from "./screens/Home/Home"


function App() {
  return (
    <React.Fragment>
    <Header/>
    <Home/>
    <Footer/>
    </React.Fragment>
    );
}

export default App;