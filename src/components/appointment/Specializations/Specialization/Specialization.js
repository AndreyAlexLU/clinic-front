import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import './specialization.css';

export default class Appointment extends React.Component {
    render() {
        const { specialization } = this.props;
        return (
            <div className='specialization'>
                <NavLink
                    to={ `/patient/appointment/${specialization.id}` }
                    className='specialization-container'
                >
                    <span className='specialization-name'>
                        { specialization.name }
                    </span>
                </NavLink>
            </div>
        )
    }
}