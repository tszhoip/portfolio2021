import React from 'react';
import './style/app.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import Shop from './pages/Shop';
import Feed from './pages/Feed';
import Figs from './pages/Figs';
import Nike from './pages/Nike';
import Odeur from './pages/Odeur';
import Canoo from './pages/Canoo';
import Logo from './pages/Logo';
import Inno from './pages/inno';
import Snap from './pages/Snap';
import Joy from './pages/Joy';
import Type from './pages/Type';


import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Header />
        <Route path="/" exact component={Home}/>
        <Route path="/work" component={Work} />
        <Route path="/feed" component={Feed}/>
        <Route path="/shop" component={Shop}/>
        <Route path="/figs" component={Figs}/>
        <Route path="/nike" component={Nike} />
        <Route path="/odeur" component={Odeur} />
        <Route path="/Inno" component={Inno} />
        <Route path="/logo" component={Logo} />
        <Route path="/canoo" component={Canoo} />
        <Route path="/snap" component={Snap} />
        <Route path="/joy" component={Joy} />
        <Route path="/type" component={Type} />

        <Footer />
    </Router>
  );
}

export default App;
