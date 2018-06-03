import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import _ from "lodash";

import * as ls from "./localStorage";
import reducers  from "./reducers/index";

import './index.css';
import App from "./app";


const localSave = ls.load("data");

const initialState = createStore(reducers);
const prevStore = initialState.getState();

const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

const store = createStore(reducers, {
    ...prevStore,
        data: localSave || prevStore.data
    },
    composeSetup(applyMiddleware(thunk))
)

store.subscribe(_.debounce(() => {
    const { data } = store.getState();
    ls.save('data', data);
}), 200);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider >
, document.getElementById('root'));