// @flow
import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {||};

export default class PatientMenu extends Component<Props, *> {
    render() {
        return (
            <Fragment>
                <li>
                    <NavLink
                        className='content-menu-item'
                        activeClassName='content-menu-item-active'
                        to='/patient/about'
                    >
                        О компании
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className='content-menu-item'
                        activeClassName='content-menu-item-active'
                        to='/patient/doctors'
                    >
                        Врачи
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className='content-menu-item'
                        activeClassName='content-menu-item-active'
                        to='/patient/price'
                    >
                        Прайс-лист
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className='content-menu-item'
                        activeClassName='content-menu-item-active'
                        to='/patient/appointment'
                    >
                        Запись на прием
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className='content-menu-item'
                        activeClassName='content-menu-item-active'
                        to='/patient/myAppointments'
                    >
                        Мои записи
                    </NavLink>
                </li>
            </Fragment>
        );
    }
}
