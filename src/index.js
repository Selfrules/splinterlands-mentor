import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot da react-dom/client
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');

// Utilizza createRoot invece di ReactDOM.render
createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter> 
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
