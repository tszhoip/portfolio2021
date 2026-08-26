import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { base } from './theme';
import '../src/assets/font/AirPro.ttf';
import '../src/assets/font/NewFont-Regular.ttf';
import '../src/assets/font/N1MONO-MONO.ttf';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={base}>
    <App  />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

