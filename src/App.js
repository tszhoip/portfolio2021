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

import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { ContainerBase } from './component/Core';

import PageWrapper from './pages/PageWrapper';
import { BlockFooter, BlockMenu } from './component/Block';


function App() {
  return (
    <Router>
      <ContainerBase width={[1, 1, 1, 1]} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Routes>
          <Route path="/" element={<PageWrapper component={<Home />} />} />
          <Route path="/work" element={<PageWrapper component={<Work />} />}/>
          <Route path="/About" element={<PageWrapper component={<About />} />}/>
          <Route path="/Shop" element={<PageWrapper component={<Shop />} />} />
          <Route path="/f-airpro" element={<PageWrapper component={<Airpro />} />} />
          <Route path="/figs" element={<PageWrapper component={<Figs />} />} />
          <Route path="/nike" element={<PageWrapper component={<Nike />} />} />
          <Route path="/Inno" element={<PageWrapper component={<Inno />} />} />
          <Route path="/logo" element={<PageWrapper component={<Logo/>} />} />
          <Route path="/canoo" element={<PageWrapper component={<Canoo/>} />} />
          <Route path="/snap" element={<PageWrapper component={<Snap/>} />} />
          <Route path="/joy" element={<PageWrapper component={<Joy/>} />} />
          <Route path="/type" element={<PageWrapper component={<Type/>} />} />

          <Route path="/license" element={<PageWrapper component={<License/>} />} />
          <Route path="/Privacy" element={<PageWrapper component={<Privacy/>} />} />
        </Routes>
        <BlockMenu />
        <BlockFooter/>
      </ContainerBase>
    </Router>
  );
}

export default App;
