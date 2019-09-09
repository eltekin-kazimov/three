import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {tekin, incrementAge} from "./State";
import App from './App';
import * as serviceWorker from './serviceWorker';

export function beginDom(){
    ReactDOM.render(<App tekin={tekin} incrementAge={incrementAge} />, document.getElementById('root'));
}

beginDom();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
