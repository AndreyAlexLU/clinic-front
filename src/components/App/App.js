import React from 'react';
import './app.css';
import Header from "../Header/Header";

export default class App extends React.Component {
    render() {
        return (
           <div className="app-wrapper">
                <Header />
           </div>
        );
    }
}