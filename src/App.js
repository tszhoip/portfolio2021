import React from 'react';
import './style/app.css';
import Nav from './component/Nav';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Work from './Work';
import Figs from './Work/Figs';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="app">
        <Nav />
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/work" component={Work}/>
        <Route path="/shop" component={Shop}/>
        <Route path="/figs" component={Figs}/>
    </div>
    </Router>
  );
}

export default App;
