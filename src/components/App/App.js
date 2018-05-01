import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './app.css';
import Header from "../Header/Header";
import {Content} from "../Content/Content";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="app-wrapper">
                    <Header />
                    <Content/>
                </div>
            </Router>
        );
    }
}