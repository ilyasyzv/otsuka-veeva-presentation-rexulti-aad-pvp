import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { renderPage } from './utils/renderpage';

renderPage(<App tab='01_Launch_screen' />, 'app');

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
