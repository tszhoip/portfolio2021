import React from 'react';
import './style/app.css';
import Nav from './component/Nav';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Play from './Play';
import Figs from './Work/Figs';
import Nike from './Work/Nike';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="app">
        <Nav />
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/play" component={Play}/>
        <Route path="/shop" component={Shop}/>
        <Route path="/figs" component={Figs}/>
        <Route path="/nike" component={Nike} />
    </div>
    </Router>
  );
}

export default App;
