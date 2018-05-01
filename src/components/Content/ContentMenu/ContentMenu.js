import React from 'react';
import { NavLink } from 'react-router-dom';
import './contentMenu.css';

export default class ContentMenu extends React.Component {
    render() {
        return (
            <ul className='content-menu'>
                <li>
                    <NavLink
                        className='content-menu-item'
                        activeClassName='content-menu-item-active'
                        to='/patient/appointment'
                    >
                        Запись на прием
                    </NavLink>
                </li>
            </ul>
        );
    }
}