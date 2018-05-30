import React from 'react';
import './header.css';
import {HeaderLogo} from "./HeaderLogo/HeaderLogo";
import RightMenu from './RightMenu/RightMenu';
import {  } from 'react-bootstrap';

export default class Header extends React.Component {
    render() {
        const testUser = {
            lastName: 'Юшкин',
            firstName: 'Андрей',
            middleName: 'Владимирович',
        };
        
        return (
            <header className='header'>
                <div className='header-wrapper'>
                    <HeaderLogo
                        logoSrc='https://blgbt.org/wp-content/uploads/2015/09/BLGBT_logo_marque.png'
                        title='Клиника "Здоровье"'
                    />
    
                    <RightMenu
                        user={ testUser }
                    />
                </div>
                

            </header>
        )
    }
}
