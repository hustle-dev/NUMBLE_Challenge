import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import 'styles/global.css';
import App from './App/App';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
