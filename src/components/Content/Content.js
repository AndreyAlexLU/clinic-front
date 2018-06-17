import React from 'react';
import { Route } from 'react-router-dom';
import './content.css';
import ContentMenu from "./ContentMenu/ContentMenu";
import Appointment from "../appointment/Appointment/Appointment";
import type { User } from '../../models/User';

type Props = {
    user: User,
};

export class Content extends React.Component<Props, *> {
    render() {
        const { user } = this.props;
        
        return (
            <div className='content-wrapper'>
                <ContentMenu user={ user } />
                <Route path='/patient/appointment' component={ Appointment }/>
            </div>
        )
    }
}
