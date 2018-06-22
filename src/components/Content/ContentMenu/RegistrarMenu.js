// @flow
import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {||};

export default class RegistrarMenu extends Component<Props, *> {
    render() {
        return (
            <Fragment>
                <li>
                    <NavLink
                        className='content-menu-item'
                        activeClassName='content-menu-item-active'
                        to='/registrar/add'
                    >
                        Добавление пациента
                    </NavLink>
                    <NavLink
                        className='content-menu-item'
                        activeClassName='content-menu-item-active'
                        to='/registrar/appointment'
                    >
                        Запись пациента
                    </NavLink>
                </li>
            </Fragment>
        );
    }
}
