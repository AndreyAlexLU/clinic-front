// @flow
import React, { Component } from 'react';
import cn from 'classnames';
import './doctorAppointments.css';
import { getFullName } from '../../../utils/getFullName';
import formatDateTime from '../../../utils/formatDateTime';
import type { User } from '../../../models/User';
import withRouter from 'react-router-dom/es/withRouter';
import { connect } from 'react-redux';
import {
    getAllCardItemsAction,
    getDoctorAppointmentsAction,
    loadDoctorAction,
    saveCardItemAction
} from '../../../actions/doctor';
import type { DoctorType } from '../../../models/Doctor';
import { Button } from 'retail-ui/components/all';
import DoctorAppointmentSidepage from './DoctorAppointmentSidepage/DoctorAppointmentSidepage';
import type { CardItem } from '../../../models/CardItem';

type Props = {|
    doctor: DoctorType,
    user: User,
    appointments: Object[],
    cardItems: Object,
    
    doctorLoading: boolean,
    doctorLoadError: ?Error,
    saveCardItemLoading: boolean,
    saveCardItemLoadError: ?Error,
    getAllCardItemsLoading: boolean,
    getAllCardItemsLoadError: ?Error,
    
    getAppointments: (doctorNumber: number) => void,
    getDoctor: (login: string) => void,
    saveCardItem: (cardItem: CardItem) => void,
    getAllCardItems: () => void,
|};

type State = {
    sidepageOpened: boolean,
    currentAppointment: Object,
}

class DoctorAppointments extends Component<Props, State> {
    
    state = {
        sidepageOpened: false,
        currentAppointment: {},
    };
    
    componentDidMount() {
        const { user, doctor, getDoctor, getAppointments, cardItems, getAllCardItems } = this.props;
        
        if (!doctor.personalNumber) {
            getDoctor(user.login);
        } else {
            getAppointments(doctor.personalNumber);
        }
        
        if (Object.keys(cardItems).length === 0) {
            getAllCardItems();
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
        const { appointments, doctor, saveCardItem, saveCardItemLoading, saveCardItemLoadError, cardItems } = this.props;
        const { sidepageOpened, currentAppointment } = this.state;
        
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
                    const message = appointmentDate > currentDate
                        ? `Запланирован прием`
                        : appointmentDate.getDay() === currentDate.getDay() &&
                        appointmentDate.getMonth() === currentDate.getMonth() &&
                        appointmentDate.getFullYear() === currentDate.getFullYear() ?
                            'Текущий прием'
                        : `Прошедший прием`;
                    
                    const classes = cn({
                        'doctor-appointment-rect': true,
                        'doctor-appointment-past': appointmentDate <= currentDate,
                        'doctor-appointment-current': appointmentDate.getDay() === currentDate.getDay() &&
                        appointmentDate.getMonth() === currentDate.getMonth() &&
                        appointmentDate.getFullYear() === currentDate.getFullYear(),
                        'doctor-appointment-future': appointmentDate > currentDate,
                    });
                    
                    const hasCardItem = cardItems[appointment.patientId] &&
                        cardItems[appointment.patientId].findIndex(c => c.date === date);
                    
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
                            { appointmentDate.getDay() === currentDate.getDay() &&
                                appointmentDate.getMonth() === currentDate.getMonth() &&
                                appointmentDate.getFullYear() === currentDate.getFullYear() && !hasCardItem && (
                                <Button onClick={ () => this.onOpenSidepage(appointment) }>
                                    Заполнить карту
                                </Button>
                            ) }
                        </div>
                    )
                })}
                
                <DoctorAppointmentSidepage
                    sidepageOpened={ sidepageOpened }
                    patientId={ currentAppointment.patientId }
                    doctorNumber={ currentAppointment.doctorNumber }
                    date={ currentAppointment.date }
                    doctorFIO={ getFullName(doctor) }
                    patientFIO={ getFullName(currentAppointment) }
                    loading={ saveCardItemLoading }
                    loadError={ saveCardItemLoadError }

                    onClose={ this.onCloseSidepage }
                    onSave={ saveCardItem }
                    
                />
            </div>
        );
    }
    
    onOpenSidepage = (appointment: Object) => {
        this.setState({
            currentAppointment: appointment,
            sidepageOpened: true,
        })
    };
    
    onCloseSidepage = () => {
        this.setState({
            sidepageOpened: false,
        })
    };
}

const props = ({ user, doctor }) => {
    return {
        user: user.user,
        doctor: doctor.doctor,
        appointments: doctor.appointments,
        cardItems: doctor.cardItems,
    
        doctorLoading: doctor.doctorLoading,
        doctorLoadError: doctor.doctorLoadError,
        saveCardItemLoading: doctor.saveCardItemLoading,
        saveCardItemLoadError: doctor.saveCardItemLoadError,
        getAllCardItemsLoading: doctor.getAllCardItemsLoading,
        getAllCardItemsLoadError: doctor.getAllCardItemsLoadError,
    };
};

const actions = {
    getAppointments: getDoctorAppointmentsAction,
    getDoctor: loadDoctorAction,
    saveCardItem: saveCardItemAction,
    getAllCardItems: getAllCardItemsAction,
};

export default withRouter(connect(props, actions)(DoctorAppointments));
