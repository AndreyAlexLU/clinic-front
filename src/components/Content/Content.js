import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import './content.css';
import ContentMenu from "./ContentMenu/ContentMenu";
import Appointment from "../appointment/Appointment/Appointment";
import type { User } from '../../models/User';
import AddEmployee from '../sysadmin/AddEmployee/AddEmployee';
import EmployeeList from '../sysadmin/EmployeeList/EmployeeList';
import Schedule from '../doctor/Schedule/Schedule';

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
                <Route path='/doctor/schedule' component={ Schedule }/>
                <Route path='/sysadmin/add' component={ AddEmployee }/>
                <Route path='/sysadmin/employees/' render={ () => <Redirect to='/sysadmin/employees/1'/> }/>
                <Route path='/sysadmin/employees/:roleId' component={ EmployeeList }/>
            </div>
        )
    }
}
