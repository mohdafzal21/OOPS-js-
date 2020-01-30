import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router } from 'react-router-dom'

// BrowserRouter - it is a HOC
// ITs to keep ui in sync with url
// Its main wrapper 
//BrowserROuter - nothing will work
//Router - passes history props to the component 
// It will remember the user location

ReactDOM.render(
<Router>
<App  />
</Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
