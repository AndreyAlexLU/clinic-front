// @flow
import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {||};

export default class AdminMenu extends Component<Props, *> {
    render() {
        return (
            <Fragment>
                <li>
                    <NavLink
                        className='content-menu-item'
                        activeClassName='content-menu-item-active'
                        to='/admin/stat'
                    >
                        Статистика и отчеты
                    </NavLink>
                </li>
            </Fragment>
        );
    }
}
