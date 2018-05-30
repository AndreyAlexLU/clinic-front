import React from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import App from "./components/App/App";

const root = document.getElementById('root');

if (root) {
    ReactDOM.render(
        <App />,
        root
    )
}
