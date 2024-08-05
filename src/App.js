import React from 'react';
import './style/app.css';

import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Figs from './pages/Figs';
import Nike from './pages/Nike';
import Shopify from './pages/Shopify'
import CanooB from './pages/CanooB';
import CanooW from './pages/CanooW';
import CanooP from './pages/CanooP';
import Logo from './pages/Logo';
import Inno from './pages/inno';
import Snap from './pages/Snap';
import Joy from './pages/Joy';
import Shop from './pages/Shop';
import License from './pages/License';
import Privacy from './pages/Privacy';
import { Airpro } from './pages/f-airpro';

import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from './component/Core';

import PageWrapper from './pages/PageWrapper';
import { BlockFooter, BlockMenu } from './component/Block';


function App() {
  return (
    <Router>
      <Container width={[1, 1, 1, 1]} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Routes>
          <Route path="/" element={<PageWrapper component={<Home />} />} />
          <Route path="/work" element={<PageWrapper component={<Work />} />}/>
          <Route path="/About" element={<PageWrapper component={<About />} />}/>
          <Route path="/Shop" element={<PageWrapper component={<Shop />} />} />
          <Route path="/f-airpro" element={<PageWrapper component={<Airpro />} />} />
          <Route path="/figs" element={<PageWrapper component={<Figs />} />} />
          <Route path="/shopify" element={<PageWrapper component={<Shopify />} />} />
          <Route path="/nike" element={<PageWrapper component={<Nike />} />} />
          <Route path="/Inno" element={<PageWrapper component={<Inno />} />} />
          <Route path="/logo" element={<PageWrapper component={<Logo/>} />} />
          <Route path="/CanooB" element={<PageWrapper component={<CanooB/>} />} />
          <Route path="/CanooW" element={<PageWrapper component={<CanooW/>} />} />
          <Route path="/CanooP" element={<PageWrapper component={<CanooP/>} />} />
          <Route path="/snap" element={<PageWrapper component={<Snap/>} />} />
          <Route path="/joy" element={<PageWrapper component={<Joy/>} />} />
          <Route path="/license" element={<PageWrapper component={<License/>} />} />
          <Route path="/Privacy" element={<PageWrapper component={<Privacy/>} />} />
        </Routes>
        <BlockMenu />
        <BlockFooter />
      </Container>
    </Router>
  );
}

export default App;
