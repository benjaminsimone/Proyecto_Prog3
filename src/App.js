import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import Home from "./screens/Home/Home"
import Detail from "./screens/Detail/Detail";


function App() {
  return (
    <BrowserRouter>
        <Header />
        <main>
          <Switch>

            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/detalle" component={Detail}></Route>

          </Switch>
        </main>
        <Footer />
    </BrowserRouter>

  );
}

export default App;