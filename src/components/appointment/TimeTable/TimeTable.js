// @flow
import React, { Fragment } from 'react';
import cn from 'classnames';
import './timetable.css';
import { connect } from 'react-redux';
import { loadTimetableAction, loadTimetableUnitsAction } from '../../../actions/timetable';
import { NavLink, Route } from 'react-router-dom';
import TimeTableUnits from './TimeTableUnits/TimeTableUnits';
import withRouter from 'react-router-dom/es/withRouter';
import type { TimeTableItem } from '../../../models/TimeTableItem';
import { getPatientAction, makeAppointmentAction } from '../../../actions/patient';
import type { PatientType } from '../../../models/Patient';
import type { TimeTableUnitType } from '../../../models/TimeTableUnit';

type Props = {
    patient: PatientType,
    specializationId: string,
    doctorId: string,
    timetable: TimeTableItem[][],
    timetableUnits: Object[],
    timetableLoading: boolean,
    timetableUnitsLoading: boolean,
    timetableLoadError: ?Error,
    timetableUnitsLoadError: ?Error,
    patientLoading: boolean,
    patientLoadError: ?Error,
    
    getTimeTable: (date: string, doctorNumber: number) => void,
    getTimeTableUnits: (date: string, doctorNumber: number) => void,
    getPatent: (login: string) => void,
    makeAppointment: (appointment: TimeTableUnitType) => void,
};

class TimeTable extends React.Component<Props, *> {
    
    componentDidMount() {
        const { doctorId, getPatient, getTimeTable, user } = this.props;
        const currentDate: Date = new Date();
        
        getTimeTable(currentDate.toISOString(), doctorId);
        getPatient(user.login);
    }
    
    render() {
        const {
            timetable, specializationId, doctorId, timetableUnits,
            getTimeTableUnits, timetableUnitsLoading, timetableUnitsLoadError,
        } = this.props;
        
        if (timetable && timetable.length > 0) {
            return (
                <div className='timetable-wrapper'>
                    <div className='timetable'>
                        { this.renderTimetableHeader() }
                        { timetable.map((timetableWeek, index: number) => {
                            const classes = cn({
                                'timetable-row': true,
                                'timetable-row-first': index === 0
                            });
                            
                            return (
                                <div className={ classes }>
                                    { timetableWeek.map(timetableUnit => this.renderCell(timetableUnit)) }
                                </div>
                            );
                            
                        }) }
                    </div>
                    
                    <Route
                        path={ `/patient/appointment/${specializationId}/${doctorId}/:date` }
                        render={
                            ({ match }) => <TimeTableUnits
                                date={ match.params.date }
                                units={ timetableUnits }
                                getUnits={ (date) => getTimeTableUnits(date, doctorId) }
                                loading={ timetableUnitsLoading }
                                loadError={ timetableUnitsLoadError }
                                onMakeAppointment={ this.onMakeAppointment }
                            />
                        }
                    />
                </div>
            );
        }
        
        // TODO loading?
        return null;
    }
    
    onMakeAppointment = (appointment) => {
        const {
            doctorId,
            patient,
            makeAppointment
        } = this.props;
        
        makeAppointment({
            ...appointment,
            doctorNumber: doctorId,
            patientId: patient.id,
        })
    };
    
    renderTimetableHeader() {
        const days = [
            'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс',
        ];
        return (
            <div className='timetable-header'>
                { days.map(day => (
                    <div className='timetable-header-item'>
                        { day }
                    </div>
                )) }
            </div>
        )
    }
    
    renderCell(timetableUnit: TimeTableItem) {
        const { specializationId, doctorId } = this.props;
        const date: Date = new Date(timetableUnit.date);
        const classes = cn({
            'timetable-cell': true,
            'timetable-cell-empty': !timetableUnit.dayOff && timetableUnit.count === 0,
            'timetable-cell-dayoff': timetableUnit.dayOff,
        });
        
        return (
            <NavLink
                className={ classes }
                to={ `/patient/appointment/${specializationId}/${doctorId}/${timetableUnit.date}` }
            >
                <div>
                    { date.getDate() }
                </div>
                <div>
                    { this.getMonthByNumber(date.getMonth())[ 1 ] }
                </div>
                <div>
                    { timetableUnit.dayOff && 'Нет записи' }
                    { !timetableUnit.dayOff && timetableUnit.count === 0 && 'Нет талонов' }
                    { timetableUnit.count > 0 && `${ timetableUnit.count } талонов` }
                </div>
            </NavLink>
        )
    }
    
    getNextDate(current: Date, shift: number) {
        let nextDate: Date = new Date(current);
        nextDate.setDate(current.getDate() + shift);
        
        return nextDate;
    }
    
    getMonthByNumber(monthNumber: number) {
        const map = {
            0: [ 'Январь', 'Января' ],
            1: [ 'Февраль', 'Февраля' ],
            2: [ 'Март', 'Марта' ],
            3: [ 'Апрель', 'Апреля' ],
            4: [ 'Май', 'Мая' ],
            5: [ 'Июнь', 'Июня' ],
            6: [ 'Июль', 'Июля' ],
            7: [ 'Август', 'Августа' ],
            8: [ 'Сентябрь', 'Сентября' ],
            9: [ 'Октябрь', 'Октября' ],
            10: [ 'Ноябрь', 'Ноября' ],
            11: [ 'Декабрь', 'Декабря' ],
        };
        
        return map[ monthNumber ];
    }
    
}

const props = ({ timetable, patient, user }) => {
    return {
        user: user.user,
        patient: patient.patient,
        patientLoading: patient.patientLoading,
        patientLoadError: patient.patientLoadError,
        timetable: timetable.timetable,
        timetableUnits: timetable.timetableUnits,
        timetableLoading: timetable.timetableLoading,
        timetableLoadError: timetable.timetableLoadError,
        timetableUnitsLoading: timetable.timetableUnitsLoading,
        timetableUnitsLoadError: timetable.timetableUnitsLoadError,
    };
};

const actions = {
    getTimeTable: loadTimetableAction,
    getTimeTableUnits: loadTimetableUnitsAction,
    getPatient: getPatientAction,
    makeAppointment: makeAppointmentAction,
};

export default withRouter(connect(props, actions)(TimeTable));




