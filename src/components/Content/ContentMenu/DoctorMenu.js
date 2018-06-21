// @flow
import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {||};

export default class DoctorMenu extends Component<Props, *> {
    render() {
        return (
            <Fragment>
                <li>
                    <NavLink
                        className='content-menu-item'
                        activeClassName='content-menu-item-active'
                        to='/doctor/schedule'
                    >
                        Расписание
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className='content-menu-item'
                        activeClassName='content-menu-item-active'
                        to='/doctor/appointments'
                    >
                        Приемы
                    </NavLink>
                </li>
            </Fragment>
        );
    }
}
