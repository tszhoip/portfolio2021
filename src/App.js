import React from 'react';
import './style/app.css';
import Nav from './component/Nav';
import Header from './component/Header';
import Footer from './component/Footer'
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Shop from './pages/Shop';
import Play from './pages/Play';
import Figs from './Work/Figs';
import Nike from './Work/Nike';
import Odeur from './Work/Odeur';
import Disney from './Work/Disney';
import Hyundai from './Work/Hyundai';
import Logo from './Work/Logo';

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="app">
        <Header/>
        {/* <Nav /> */}
        <Route path="/" exact component={Home}/>
        <Route path="/work" component={Work} />
        <Route path="/about" component={About}/>
        <Route path="/play" component={Play}/>
        <Route path="/shop" component={Shop}/>
        <Route path="/figs" component={Figs}/>
        <Route path="/nike" component={Nike} />
        <Route path="/odeur" component={Odeur} />
        <Route path="/disney" component={Disney} />
        <Route path="/hyundai" component={Hyundai} />
        <Route path="/logo" component={Logo} />

        <Footer />
    </div>
    </Router>
  );
}

export default App;
