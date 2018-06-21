import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import './registrarSpecialization.css';

export default class RegistrarSpecialization extends React.Component {
    render() {
        const { specialization } = this.props;
        return (
            <div className='specialization'>
                <NavLink
                    to={ `/registrar/appointment/${specialization.id}` }
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
