import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';
import { Provider } from 'react-redux';
import { firebaseConfig } from './config/keys';
import store from './store';
import App from './App';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
