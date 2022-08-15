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
import Figs from './pages/Figs';
import Nike from './pages/Nike';
import Odeur from './pages/Odeur';
import Disney from './pages/Disney';
import Hyundai from './pages/Hyundai';
import Canoo from './pages/Canoo';
import Logo from './pages/Logo';


import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
        <Header />
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
        <Route path="/canoo" component={Canoo} />

        <Footer />
    </Router>
  );
}

export default App;
