import React from 'react';
import './header.css';
import {HeaderLogo} from "./HeaderLogo/HeaderLogo";

export default class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <HeaderLogo
                    logoSrc='https://blgbt.org/wp-content/uploads/2015/09/BLGBT_logo_marque.png'
                    title='Клиника "Здоровье"'
                />
                
                

            </header>
        )
    }
}
