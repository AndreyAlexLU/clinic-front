import React from 'react';
import './doctors.css';

export default class Doctors extends React.Component {
    render() {
        return (
            <div>
                { this.props.doctorId }
            </div>
        );
    }
}