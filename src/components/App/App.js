import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './app.css';
import Header from "../Header/Header";
import {Content} from "../Content/Content";
import Footer from '../Footer/Footer';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="app-wrapper">
                    <Header />
                    <Content/>
                    <Footer />
                </div>
            </Router>
        );
    }
}
