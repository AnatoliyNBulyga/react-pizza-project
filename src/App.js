import React, {useEffect, useState} from "react";
import {Route} from "react-router-dom";
import axios from "axios";

import './scss/app.scss';
import { Header } from './components';
import { Home } from "./pages";
import { Cart } from "./pages";
import Axios from "axios";

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    // fetch('http://localhost:3000/db.json')
    // .then(response => response.json())
    // .then(data => setPizzas(data.pizzas));

    axios.get('http://localhost:3000/db.json')
    .then( ({data}) => setPizzas(data.pizzas) )
    
  }, []);
  return  (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={()=><Home pizzas={pizzas} />} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
