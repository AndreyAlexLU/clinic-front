// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUserAction } from '../../../actions/user';
import type { User } from '../../../models/User';
import { Button, Input } from 'retail-ui/components/all';

type Props = {|
    user: User,
    token: string,
    
    loginUser: (userData: User) => void,
|};

type State = {
    login: string,
    password: string,
}

class Login extends Component<Props, State> {
    state = {
        login: '',
        password: '',
    };
    
    render() {
        const { login, password } = this.state;
        
        return (
            <form>
                <Input value={ login } onChange={ this.onChangeLogin }/>
                <Input value={ password } type='password' onChange={ this.onChangePassword }/>
                <Button type='submit' use='primary' onClick={ this.loginUser }/>
            </form>
        );
    }
    
    onChangeLogin = (event, login) => {
        this.setState({
            login
        })
    };
    
    onChangePassword = (event, password) => {
        this.setState({
            password
        })
    };
    
    loginUser = () => {
        const { loginUser } = this.props;
        const { login, password } = this.state;
    
        loginUser({
            login,
            password,
        });
    }
    
}


const props = ({ user }) => {
    return {
        user: user.user,
        token: user.token,
    };
};

const actions = {
    loginUser: loginUserAction,
};

export default connect(props, actions)(Login);
