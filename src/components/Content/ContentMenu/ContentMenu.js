import React from 'react';
import './contentMenu.css';
import PatientMenu from './PatientMenu';
import type { User } from '../../../models/User';
import { RolesEnum } from '../../../constants/roles';

type Props = {
    user: User,
};

export default class ContentMenu extends React.Component<Props, *> {
    render() {
        const { roleId } = this.props.user;
        return (
            <ul className='content-menu'>
                { roleId === RolesEnum.PATIENT && (
                    <PatientMenu/>
                )}
                
            </ul>
        );
    }
}
