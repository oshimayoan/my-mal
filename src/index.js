// @flow strict-local

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {unregister} from './registerServiceWorker';

let root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
unregister();
