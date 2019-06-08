import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import './style.css';

const container = document.getElementById('vm-app');

ReactDOM.hydrate(<Router><App/></Router>, container);
