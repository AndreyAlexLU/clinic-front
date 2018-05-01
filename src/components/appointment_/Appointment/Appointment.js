import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './appointment.css';
import {PageHeader} from "react-bootstrap";
import Specializations from "../Specializations/Specializations";
import Doctors from "../Doctors/Doctors";

export default class Appointment extends React.Component {
    render() {
        return (
            <div>
                <PageHeader>
                    Запись к врачу
                </PageHeader>

                <Switch>
                    {/*<Route path='/patient/appointment/:specialization/:doctorId' render={
                        ({ match }) => <Doctors doctorId={ match.params.doctorId }/>
                    }/>*/}
                    <Route path='/patient/appointment/:specialization' render={
                        ({ match }) => <Doctors specialization={ match.params.specialization }/>
                    }/>
                    <Route path='/patient/appointment/' render={
                        ({ match }) => <Specializations specialization={ match.params.specialization }/>
                    }/>
                </Switch>

            </div>
        );
    }
}