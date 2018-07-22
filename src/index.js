import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import { firebaseConfig } from './config/keys';
import App from './App';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
