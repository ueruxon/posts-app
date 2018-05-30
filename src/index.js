import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'

import './index.css';
import App from "./app";
import reducers  from "./reducers/index";

const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

const store = createStore(
    reducers,
    composeSetup(applyMiddleware(thunk))
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider >
, document.getElementById('root'));