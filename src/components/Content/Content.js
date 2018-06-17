import React from 'react';
import { Route } from 'react-router-dom';
import './content.css';
import ContentMenu from "./ContentMenu/ContentMenu";
import Appointment from "../appointment/Appointment/Appointment";

export class Content extends React.Component {
    render() {
        return (
            <div className='content-wrapper'>
                <ContentMenu />
                <Route path='/patient/appointment' component={ Appointment }/>
            </div>
        )
    }
}
