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
import CanooDesignSystem from './pages/CanooDesignSystem';
import Project1 from './pages/work/Project1';
import Project2 from './pages/work/Project2';
import Project3 from './pages/work/Project3';
import Project4 from './pages/work/Project4';
import Project5 from './pages/work/Project5';
import Project6 from './pages/work/Project6';
import Logo from './pages/Logo';
import Inno from './pages/inno';
import Snap from './pages/Snap';
import Joy from './pages/Joy';
import Shop from './pages/Shop';
import License from './pages/License';
import Privacy from './pages/Privacy';
import Library from './pages/Library';
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
          <Route path="/CanooDesignSystem" element={<PageWrapper component={<CanooDesignSystem/>} />} />
          <Route path="/CanooP" element={<PageWrapper component={<CanooP/>} />} />
          <Route path="/snap" element={<PageWrapper component={<Snap/>} />} />
          <Route path="/archive" element={<PageWrapper component={<Snap/>} />} />
          <Route path="/joy" element={<PageWrapper component={<Joy/>} />} />
          <Route path="/work/project-1" element={<PageWrapper component={<Project1/>} />} />
          <Route path="/work/project-2" element={<PageWrapper component={<Project2/>} />} />
          <Route path="/work/project-3" element={<PageWrapper component={<Project3/>} />} />
          <Route path="/work/project-4" element={<PageWrapper component={<Project4/>} />} />
          <Route path="/work/project-5" element={<PageWrapper component={<Project5/>} />} />
          <Route path="/work/project-6" element={<PageWrapper component={<Project6/>} />} />
          <Route path="/license" element={<PageWrapper component={<License/>} />} />
          <Route path="/Privacy" element={<PageWrapper component={<Privacy/>} />} />
          <Route path="/library" element={<PageWrapper component={<Library/>} />} />
        </Routes>
        <BlockMenu />
        <BlockFooter />
      </Container>
    </Router>
  );
}

export default App;
