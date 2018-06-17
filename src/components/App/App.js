import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './app.css';
import Header from "../Header/Header";
import {Content} from "../Content/Content";
import Footer from '../Footer/Footer';
import { connect } from 'react-redux';
import type { User } from '../../models/User';
import Login from '../auth/Login/Login';
import { getUserAction, logoutUserAction } from '../../actions/user';

type Props = {
    user: User,
    token: string,
    
    getUser: (login) => void,
    logout: () => void,
}

class App extends React.Component<Props, *> {
    componentDidMount() {
        const { user, getUser } = this.props;
        
        getUser(user.login);
    }
    
    render() {
        const { user, token, logout } = this.props;
        
        return (
            <Router>
                <div className="app-wrapper">
                    <Header user={ user } logout={ logout }/>
                    { token && user && (
                        <Content user={ user }/>
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
    getUser: getUserAction,
    logout: logoutUserAction,
};

export default connect(props, actions)(App);
