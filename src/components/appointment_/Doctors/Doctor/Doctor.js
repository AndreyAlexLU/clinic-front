import React from 'react';
import { NavLink } from 'react-router-dom';
import './doctor.css';

export default class Doctor extends React.Component {
    render() {
        const { specializationId, doctor } = this.props;

        return (
            <div className='doctor'>
                <NavLink
                    to={ `/patient/appointment/${specializationId}/${doctor.id}` }
                    className='doctor-container'
                >
                    <span className='doctor-name'>
                        { doctor.name }
                    </span>
                </NavLink>
            </div>
        );
    }
}