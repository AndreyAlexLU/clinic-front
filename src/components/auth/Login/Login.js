// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUserAction } from '../../../actions/user';
import type { User } from '../../../models/User';
import { Button, Gapped, Input } from 'retail-ui/components/all';
import './login.css';
import { withRouter } from 'react-router-dom';

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
            <div className='login-wrapper'>
                <form>
                    <Gapped gap={ 10 } vertical>
                        <div className='login-row'>
                            <div className='login-label'>
                                Логин
                            </div>
                            <Input value={ login } onChange={ this.onChangeLogin }/>
                        </div>
                        
                        <div className='login-row'>
                            <div className='login-label'>
                                Пароль
                            </div>
                            <Input value={ password } type='password' onChange={ this.onChangePassword }/>
                        </div>
                        
                        <div className='login-submit'>
                            <Button type='submit' use='primary' onClick={ this.loginUser } width={ 100 }>
                                Войти
                            </Button>
                        </div>
                        
                    </Gapped>
                </form>
            </div>
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
        this.props.history.push('/');
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

export default withRouter(connect(props, actions)(Login));
