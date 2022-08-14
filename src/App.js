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
import Figs from './pages/work/Figs';
import Nike from './pages/work/Nike';
import Odeur from './pages/work/Odeur';
import Disney from './pages/work/Disney';
import Hyundai from './pages/work/Hyundai';
import Canoo from './pages/work/Canoo';
import Logo from './pages/work/Logo';


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
        <Route path="/work/figs" component={Figs}/>
        <Route path="/work/nike" component={Nike} />
        <Route path="/work/odeur" component={Odeur} />
        <Route path="/work/disney" component={Disney} />
        <Route path="/work/hyundai" component={Hyundai} />
        <Route path="/work/logo" component={Logo} />
        <Route path="/work/canoo" component={Canoo} />

        <Footer />
    </Router>
  );
}

export default App;
