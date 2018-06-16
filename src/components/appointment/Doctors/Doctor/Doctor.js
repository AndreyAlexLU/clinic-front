import React from 'react';
import { NavLink } from 'react-router-dom';
import './doctor.css';
import { getFullName } from '../../../../utils/getFullName';
import type { DoctorType } from '../../../../models/Doctor';

type Props = {
    doctor: DoctorType,
    specializationId: string,
}

export default class Doctor extends React.Component<Props, *> {
    render() {
        const { specializationId, doctor } = this.props;

        return (
            <div className='doctor'>
                <NavLink
                    to={ `/patient/appointment/${specializationId}/${doctor.personalNumber}` }
                    className='doctor-container'
                >
                    <span className='doctor-name'>
                        { getFullName(doctor.firstName, doctor.lastName, doctor.middleName) }
                    </span>
                </NavLink>
            </div>
        );
    }
}
