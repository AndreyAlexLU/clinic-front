import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../../appointment/Appointment/appointment.css';
import RegistrarTimeTable from '../RegistrarTimeTable/RegistrarTimeTable';
import RegistrarDoctors from '../Doctors/RegistrarDoctors';
import RegistrarSpecializations from '../Specializations/RegistrarSpecializations';

export default class RegistrarAppointments extends React.Component {
    render() {
        return (
            <div className='appointment'>
                <Switch>
                    <Route path='/registrar/appointment/:specializationId/:doctorId' render={
                        ({ match }) => <RegistrarTimeTable
                            specializationId={ match.params.specializationId }
                            doctorId={ match.params.doctorId }
                        />
                    }/>
                    <Route path='/registrar/appointment/:specializationId' render={
                        ({ match }) => <RegistrarDoctors specializationId={ match.params.specializationId }/>
                    }/>
                    <Route path='/registrar/appointment/' component={ RegistrarSpecializations }/>
                </Switch>
            
            </div>
        );
    }
}
