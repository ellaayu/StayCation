//rfc + Tab
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'assets/scss/style.scss'
import LandingPages from 'pages/LandingPages';
import DetailsPage from 'pages/DetailsPage';
import Checkout from 'pages/Checkout';

function App() {
  return (
    <div className="App">
       <Router>
         
         <Route exact path="/" component={LandingPages}></Route>
         <Route path="/properties/:id" component={DetailsPage}></Route>
         <Route path="/checkout" component={Checkout}></Route>
       </Router>
    </div>
  );
}

export default App;
