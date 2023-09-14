import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import Home from "./screens/Home/Home"
import Detail from "./screens/Detail/Detail";
import VerPopulares from "./screens/VerTodas/VerPopulares"
import VerTop_Rated from "./screens/VerTodas/VerTop_Rated"
import ResultadoBusqueda from "./screens/ResultadoBusqueda/ResultadoBusqueda";
import Error404 from "./screens/Error404/Error404";


function App() {
  return (
    <BrowserRouter>
        <Header />
        <main>
          <Switch>

            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/detalle/:id" component={Detail}></Route>
            <Route path="/VerPopulares" component={VerPopulares}></Route>
            <Route path="/VerTop_Rated" component={VerTop_Rated}></Route>
            <Route path="/resultadoBusqueda/" component={ResultadoBusqueda}></Route>
            <Route path="" component={Error404}></Route>

          </Switch>
        </main>
        <Footer />
    </BrowserRouter>

  );
}

export default App;