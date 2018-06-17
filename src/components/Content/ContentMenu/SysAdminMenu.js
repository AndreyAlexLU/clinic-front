// @flow
import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {||};

export default class SysAdminMenu extends Component<Props, *> {
    render() {
        return (
            <Fragment>
                <li>
                    <NavLink
                        className='content-menu-item'
                        activeClassName='content-menu-item-active'
                        to='/sysadmin/add'
                    >
                        Добавление сотрудника
                    </NavLink>
                </li>
            </Fragment>
        );
    }
}
