import React from 'react';
import { Route } from 'react-router-dom';
import './specialization.css';

export default class Appointment extends React.Component {
    render() {
        return (
            <div>
                { this.props.specialization.name }
            </div>
        )
    }
}