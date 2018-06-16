// @flow
import React, { Component } from 'react';
import type { User } from '../../../models/User';
import './rightMenu.css';
import { Gapped, Button, Icon20 } from 'retail-ui/components/all';
import { Link } from 'react-router-dom';

type Props = {|
    user: User;
|};

export default class RightMenu extends Component<Props, *> {
    
    render() {
        const { user } = this.props;
        
        if (user && user.login) {
            return (
                <div className='right-menu-wrapper'>
                    <span className='right-menu-user'>
                        <span className='right-menu-user-icon'>
                            <Icon20 name="user" />
                        </span>
                        { user.login }
                    </span>
        
                    <Gapped gap={5}>
                        <Button use="default">Профиль</Button>
                        <Button use="default">Выйти</Button>
                    </Gapped>
                </div>
            );
        }
        
        return (
            <div className='right-menu-wrapper'>
                <Button use="default" >
                    <Link to='/login'>
                        Войти в систему
                    </Link>
                </Button>
            </div>
        );
    }
}
