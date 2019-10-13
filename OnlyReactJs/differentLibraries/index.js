import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


//allows to give global state
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import reducer from './store/reducers/reducer';
import thunk from 'redux-thunk'

const globalStore = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={globalStore}><App /></Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
