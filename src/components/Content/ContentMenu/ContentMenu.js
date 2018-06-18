import React from 'react';
import './contentMenu.css';
import PatientMenu from './PatientMenu';
import type { User } from '../../../models/User';
import { RolesEnum } from '../../../constants/roles';
import SysAdminMenu from './SysAdminMenu';
import DoctorMenu from './DoctorMenu';

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
                { roleId === RolesEnum.DOCTOR && (
                    <DoctorMenu/>
                )}
                { roleId === RolesEnum.SYS_ADMIN && (
                    <SysAdminMenu/>
                )}
                
            </ul>
        );
    }
}
