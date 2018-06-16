import React from 'react';
import { Route } from 'react-router-dom';
import './content.css';
import ContentMenu from "./ContentMenu/ContentMenu";
import Appointment from "../appointment/Appointment/Appointment";
import Login from '../auth/Login/Login';

export class Content extends React.Component {
    render() {
        return (
            <div className='content-wrapper'>
                <ContentMenu />
                <Route path='/login' component={ Login }/>
                <Route path='/patient/appointment' component={ Appointment }/>
            </div>
        )
    }
}
