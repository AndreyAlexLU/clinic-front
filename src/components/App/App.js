import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './app.css';
import Header from "../Header/Header";
import {Content} from "../Content/Content";
import Footer from '../Footer/Footer';
import { connect } from 'react-redux';
import type { User } from '../../models/User';
import Login from '../auth/Login/Login';

type Props = {
    user: User,
    token: string,
}

class App extends React.Component<Props, *> {
    componentDidMount() {
    
    }
    
    render() {
        const { user, token } = this.props;
        
        return (
            <Router>
                <div className="app-wrapper">
                    <Header user={ user }/>
                    { token && (
                        <Content/>
                    )}
                    { !token && (
                        <Login/>
                    )}
                    <Footer />
                </div>
            </Router>
        );
    }
}

const props = ({ user }) => {
    return {
        user: user.user,
        token: user.token,
    };
};

const actions = {
};

export default connect(props, actions)(App);
