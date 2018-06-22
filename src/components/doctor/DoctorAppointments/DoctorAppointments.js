// @flow
import React, { Component } from 'react';
import cn from 'classnames';
import './doctorAppointments.css';
import { getFullName } from '../../../utils/getFullName';
import formatDateTime from '../../../utils/formatDateTime';
import type { User } from '../../../models/User';
import withRouter from 'react-router-dom/es/withRouter';
import { connect } from 'react-redux';
import { getDoctorAppointmentsAction, loadDoctorAction } from '../../../actions/doctor';
import type { DoctorType } from '../../../models/Doctor';
import { Button } from 'retail-ui/components/all';

type Props = {|
    doctor: DoctorType,
    user: User,
    appointments: Object[],
    
    doctorLoading: boolean,
    doctorLoadError: ?Error,
    
    getAppointments: (doctorNumber: number) => void,
    getDoctor: (login: string) => void,
|};

class DoctorAppointments extends Component<Props, *> {
    componentDidMount() {
        const { user, doctor, getDoctor, getAppointments } = this.props;
        
        if (!doctor.personalNumber) {
            getDoctor(user.login);
        } else {
            getAppointments(doctor.personalNumber);
        }
    }
    
    componentDidUpdate(prevProps: Props) {
        const { doctorLoading, doctorLoadError, doctor, getAppointments, user } = this.props;
        
        if (prevProps.doctorLoading && !doctorLoading) {
            if (!doctorLoadError) {
                getAppointments(doctor.personalNumber);
            }
        }
    
        if (prevProps.user.login !== user.login) {
            getAppointments(doctor.personalNumber);
        }
    }
    
    render() {
        const { appointments } = this.props;
        
        return (
            <div className='doctor-appointments-grid'>
                { appointments.map(appointment => {
                    const {
                        startTime,
                        date,
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
                        'doctor-appointment-rect': true,
                        'doctor-appointment-past': appointmentDate <= currentDate,
                        'doctor-appointment-current': appointmentDate > currentDate,
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
                                { getFullName(appointment)}
                            </span>
                            <br/>
                            { appointmentDate <= currentDate && (
                                <Button onClick={ null }>
                                    Заполнить карту
                                </Button>
                            ) }
                        </div>
                    )
                })}
            </div>
        );
    }
}

const props = ({ user, doctor }) => {
    return {
        user: user.user,
        doctor: doctor.doctor,
        appointments: doctor.appointments,
    
        doctorLoading: doctor.doctorLoading,
        doctorLoadError: doctor.doctorLoadError,
    };
};

const actions = {
    getAppointments: getDoctorAppointmentsAction,
    getDoctor: loadDoctorAction,
};

export default withRouter(connect(props, actions)(DoctorAppointments));
