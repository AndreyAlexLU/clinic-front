import React from 'react';
import './contentMenu.css';
import PatientMenu from './PatientMenu';

export default class ContentMenu extends React.Component {
    render() {
        return (
            <ul className='content-menu'>
                <PatientMenu/>
            </ul>
        );
    }
}
