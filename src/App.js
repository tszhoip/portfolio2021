import React from 'react';
import './style/app.css';
import Nav from './component/Nav';
import Footer from './component/Footer'
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Play from './pages/Play';
import Figs from './work/Figs';
import Nike from './work/Nike';
import Odeur from './work/Odeur';
import Disney from './work/Disney';
import Hyundai from './work/Hyundai';

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
        <Route path="/odeur" component={Odeur} />
        <Route path="/disney" component={Disney} />
        <Route path="/hyundai" component={Hyundai} />
        <Footer />
    </div>
    </Router>
  );
}

export default App;
