import React from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import App from "./components/App/App";
import initStore from '../initStore';
import { Provider } from 'react-redux';

const root = document.getElementById('root');

const store = initStore();

if (root) {
    ReactDOM.render(
        <Provider store={ store }>
            <App />
        </Provider>,
        root
    )
}
