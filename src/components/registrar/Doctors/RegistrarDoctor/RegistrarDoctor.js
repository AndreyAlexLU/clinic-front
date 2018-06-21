import React from 'react';
import { NavLink } from 'react-router-dom';
import './registrarDoctor.css';
import { getFullName } from '../../../../utils/getFullName';
import type { DoctorType } from '../../../../models/Doctor';

type Props = {
    doctor: DoctorType,
    specializationId: string,
}

export default class RegistrarDoctor extends React.Component<Props, *> {
    render() {
        const { specializationId, doctor } = this.props;

        return (
            <div className='doctor'>
                <NavLink
                    to={ `/registrar/appointment/${specializationId}/${doctor.personalNumber}` }
                    className='doctor-container'
                >
                    <span className='doctor-name'>
                        { getFullName(doctor) }
                    </span>
                </NavLink>
            </div>
        );
    }
}
