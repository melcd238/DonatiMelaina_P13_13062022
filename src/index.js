import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/main.css'
import Router from './Router';
import { Provider } from 'react-redux';
import {  store, persistor } from './Store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <PersistGate loadin={null} persistor={persistor}>
    <BrowserRouter>
        <Router />
    </BrowserRouter>
    </PersistGate>
  </Provider>
);


