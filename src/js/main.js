import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'; 

import Layout from './pages/Layout';

const app = document.getElementById('app');

ReactDOM.render( 
  <Router>
    <div>
      <Route exact path="/" component={Layout}/>
      <Route path="/aventuras" component={Layout}/>
      <Route path="/shop" component={Layout}/>
      <Route path="/configuracion" component={Layout}/>
    </div>
  </Router>
, app );