import React from 'react';
import './header.css';
import {HeaderLogo} from "./HeaderLogo/HeaderLogo";

export default class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <HeaderLogo
                    logoSrc='https://d33wubrfki0l68.cloudfront.net/f35d49d959deb5bfd7deb80c2668128367e2917c/eb35e/images/logo.svg'
                    title='Клиника Юшкина'
                />

            </header>
        )
    }
}