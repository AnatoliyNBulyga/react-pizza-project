import React from "react";
import {Route} from "react-router-dom";

import './scss/app.scss';
import { Header } from './components';
import { Home } from "./pages";
import { Cart } from "./pages";

function App() {
  return  (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
