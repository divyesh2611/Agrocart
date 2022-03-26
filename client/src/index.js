import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {CartProvider} from 'react-use-cart'

  

ReactDOM.render(
  //  <CartProvider >
  //  <App />
  //  </CartProvider>,
   <React.StrictMode>
     <App />
   </React.StrictMode>,
  
  document.getElementById('root')
);
reportWebVitals();

