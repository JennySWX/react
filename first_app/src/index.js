import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// <APP/>: the content we pass --> ReactDom need to render this
// document.getElementById('root') : render the content at the root element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// service worker code
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
