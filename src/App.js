import React from 'react';
import './style/app.css';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Figs from './pages/Figs';
import Nike from './pages/Nike';
import Canoo from './pages/Canoo';
import Logo from './pages/Logo';
import Inno from './pages/inno';
import Snap from './pages/Snap';
import Joy from './pages/Joy';
import Type from './pages/Type';
import Shop from './pages/Shop';
import License from './pages/License';
import Privacy from './pages/Privacy';
import { Airpro } from './pages/f-airpro';

import { BlockMenu,BlockFooter } from './component/Block';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { ContainerBase } from './component/Core';

function App() {
  return (
    <Router>
      <ContainerBase width={[1, 1, 1, 1]} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <BlockMenu />
        <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/work" element={<Work/>} />
        <Route path="/feed" element={<About/>} />
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/f-airpro" element={<Airpro/>}/>
        <Route path="/figs" element={<Figs/>}/>
        <Route path="/nike" element={<Nike/>}/>
        <Route path="/Inno" element={<Inno/>}/>
        <Route path="/logo" element={<Logo/>}/>
        <Route path="/canoo" element={<Canoo/>}/>
        <Route path="/snap" element={<Snap/>}/>
        <Route path="/joy" element={<Joy/>}/>
        <Route path="/type" element={<Type/>}/>

        <Route path="/license" element={<License/>}/>
        <Route path="/Privacy" element={<Privacy/>}/>
        </Routes>
        <BlockFooter />
        </ContainerBase>
    </Router>
  );
}

export default App;
