import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './appointment.css';
import Specializations from "../Specializations/Specializations";
import Doctors from "../Doctors/Doctors";
import TimeTable from "../TimeTable/TimeTable";

export default class Appointment extends React.Component {
    render() {
        return (
            <div className='appointment'>
                <Switch>
                    <Route path='/patient/appointment/:specialization/:doctorId' render={
                        ({ match }) => <TimeTable doctorId={ match.params.doctorId }/>
                    }/>
                    <Route path='/patient/appointment/:specializationId' render={
                        ({ match }) => <Doctors specializationId={ match.params.specializationId }/>
                    }/>
                    <Route path='/patient/appointment/' component={ Specializations }/>
                </Switch>

            </div>
        );
    }
}