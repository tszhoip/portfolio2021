import React from 'react';
import './style/app.css';
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
import { BlockHeader, BlockFooter } from './component/Block';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <BlockHeader />
        <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/work" element={<Work/>} />
        <Route path="/feed" element={<Feed/>} />
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/figs" element={<Figs/>}/>
        <Route path="/nike" element={<Nike/>}/>
        <Route path="/odeur" element={<Odeur/>}/>
        <Route path="/Inno" element={<Inno/>}/>
        <Route path="/logo" element={<Logo/>}/>
        <Route path="/canoo" element={<Canoo/>}/>
        <Route path="/snap" element={<Snap/>}/>
        <Route path="/joy" element={<Joy/>}/>
        <Route path="/type" element={<Type/>}/>
        </Routes>
        <BlockFooter />
    </Router>
  );
}

export default App;
