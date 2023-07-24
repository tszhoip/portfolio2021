import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { base } from './theme';
import '../src/Assets/font/AirPro.ttf';
import '../src/Assets/font/NewFont-Regular.ttf';
import '../src/Assets/font/N1MONO-MONO.ttf';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={base}>
    <App  />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

