import React from 'react';
import './header.css';
import {HeaderLogo} from "./HeaderLogo/HeaderLogo";
import RightMenu from './RightMenu/RightMenu';
import type { User } from '../../models/User';

type Props = {
    user: User,
}

export default class Header extends React.Component<Props, *> {
    render() {
        const { user } = this.props;
        
        return (
            <header className='header'>
                <div className='header-wrapper'>
                    <HeaderLogo
                        logoSrc='https://blgbt.org/wp-content/uploads/2015/09/BLGBT_logo_marque.png'
                        title='Клиника "Здоровье"'
                    />
    
                    <RightMenu
                        user={ user }
                    />
                </div>
                

            </header>
        )
    }
}
