// @flow
import React, { Component } from 'react';
import cn from 'classnames';
import './patientAppointments.css';
import withRouter from 'react-router-dom/es/withRouter';
import { connect } from 'react-redux';
import { cancelAppointmentAction, getAppointmentsAction, getPatientAction } from '../../../actions/patient';
import type { PatientType } from '../../../models/Patient';
import type { User } from '../../../models/User';
import formatDateTime from '../../../utils/formatDateTime';
import { getFullName } from '../../../utils/getFullName';
import { Button, Icon } from 'retail-ui/components/all';

type Props = {|
    patient: PatientType,
    user: User,
    appointments: Object[],
    
    patientLoading: boolean,
    patientLoadError: ?Error,
    
    getAppointments: (patientId: string) => void,
    getPatient: (login: string) => void,
    cancelAppointment: (id: string) => void,
|};

class PatientAppointments extends Component<Props, *> {
    componentDidMount() {
        const { user, patient, getPatient, getAppointments } = this.props;
        
        if (!patient.id) {
            getPatient(user.login);
        } else {
            getAppointments(patient.id);
        }
    }
    
    componentDidUpdate(prevProps: Props) {
        const { patientLoading, patientLoadError, patient, getAppointments, user } = this.props;
        
        if (prevProps.patientLoading && !patientLoading) {
            if (!patientLoadError) {
                getAppointments(patient.id);
            }
        }
    
        if (prevProps.user.login !== user.login) {
            getAppointments(patient.id);
        }
    }
    
    render() {
        const { appointments, cancelAppointment } = this.props;
        
        return (
            <div className='patient-appointments-grid'>
                { appointments.map(appointment => {
                    const {
                        startTime,
                        date,
                        specialization,
                    } = appointment;
                    
                    const currentDate = new Date();
                    const appointmentDate = new Date(date);
                    const timeChunks = startTime.split(':').map(x => +x);
                    appointmentDate.setHours(timeChunks[0]);
                    appointmentDate.setMinutes(timeChunks[1]);
                    
                    const formattedDate = formatDateTime(appointmentDate);
                    const message = appointmentDate <= currentDate
                        ? `Прошедший прием`
                        : `Запланирован прием`;
                    
                    const classes = cn({
                       'patient-appointment-rect': true,
                       'patient-appointment-past': appointmentDate <= currentDate,
                       'patient-appointment-current': appointmentDate > currentDate,
                    });
                    
                    return (
                        <div className={ classes }>
                            <span>
                                { message }
                            </span>
                            <span>
                                { formattedDate }
                            </span>
                            <span>
                                {specialization} { getFullName(appointment)}
                            </span>
                            <br />
                            { appointmentDate > currentDate && (
                                <Button use='pay' onClick={ () => cancelAppointment(appointment.id) }>
                                    Отменить
                                </Button>
                            ) }
                            
                        </div>
                    )
                })}
            </div>
        );
    }
}

const props = ({ user, patient }) => {
    return {
        user: user.user,
        patient: patient.patient,
        appointments: patient.appointments,
        
        patientLoading: patient.patientLoading,
        patientLoadError: patient.patientLoadError,
    };
};

const actions = {
    getAppointments: getAppointmentsAction,
    getPatient: getPatientAction,
    cancelAppointment: cancelAppointmentAction,
};

export default withRouter(connect(props, actions)(PatientAppointments));
