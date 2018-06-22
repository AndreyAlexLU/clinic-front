import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import './content.css';
import ContentMenu from "./ContentMenu/ContentMenu";
import Appointment from "../appointment/Appointment/Appointment";
import type { User } from '../../models/User';
import AddEmployee from '../sysadmin/AddEmployee/AddEmployee';
import EmployeeList from '../sysadmin/EmployeeList/EmployeeList';
import Schedule from '../doctor/Schedule/Schedule';
import PatientAppointments from '../patient/PatientAppointments/PatientAppointments';
import DoctorAppointments from '../doctor/DoctorAppointments/DoctorAppointments';
import RegistrarAppointments from '../registrar/RegistrarAppointments/RegistrarAppointments';
import AddPatient from '../registrar/AddPatient/AddPatient';

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
                <Route path='/patient/myAppointments' component={ PatientAppointments }/>
                <Route path='/doctor/schedule' component={ Schedule }/>
                <Route path='/doctor/appointments' component={ DoctorAppointments }/>
                <Route path='/registrar/appointment' component={ RegistrarAppointments }/>
                <Route path='/registrar/add' component={ AddPatient }/>
                <Route path='/sysadmin/add' component={ AddEmployee }/>
                <Route path='/sysadmin/employees/' render={ () => <Redirect to='/sysadmin/employees/1'/> }/>
                <Route path='/sysadmin/employees/:roleId' component={ EmployeeList }/>
            </div>
        )
    }
}
