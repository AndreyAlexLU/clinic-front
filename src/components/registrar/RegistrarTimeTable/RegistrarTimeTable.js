// @flow
import React from 'react';
import cn from 'classnames';
import './registrarTimetable.css';
import { connect } from 'react-redux';
import { loadTimetableAction, loadTimetableUnitsAction } from '../../../actions/timetable';
import { NavLink, Route } from 'react-router-dom';
import RegistrarTimeTableUnits from './TimeTableUnits/RegistrarTimeTableUnits';
import withRouter from 'react-router-dom/es/withRouter';
import type { TimeTableItem } from '../../../models/TimeTableItem';
import { getPatientsAction, makeAppointmentAction } from '../../../actions/patient';
import type { TimeTableUnitType } from '../../../models/TimeTableUnit';
import { Select } from 'retail-ui/components/all';
import { getFullName } from '../../../utils/getFullName';

type Props = {
    patients: Object[],
    specializationId: string,
    doctorId: string,
    timetable: TimeTableItem[][],
    timetableUnits: Object[],
    timetableLoading: boolean,
    timetableUnitsLoading: boolean,
    timetableLoadError: ?Error,
    timetableUnitsLoadError: ?Error,
    makeAppointmentLoading: boolean,
    makeAppointmentLoadError: ?Error,
    patientsLoading: boolean,
    patientsLoadError: ?Error,
    
    getPatients: () => void,
    getTimeTable: (date: string, doctorNumber: number) => void,
    getTimeTableUnits: (date: string, doctorNumber: number) => void,
    makeAppointment: (appointment: TimeTableUnitType) => void,
};

type State = {
    patientId: string,
};

class RegistrarTimeTable extends React.Component<Props, State> {
    
    state = {
        patientId: null,
    };
    
    componentDidMount() {
        const { doctorId, getTimeTable, user, getPatients } = this.props;
        const currentDate: Date = new Date();
        
        getTimeTable(currentDate.toISOString(), doctorId);
        getPatients();
    }
    
    componentDidUpdate(prevProps: Props) {
        const { makeAppointmentLoading, makeAppointmentLoadError, doctorId, getTimeTable } = this.props;
        
        if (prevProps.makeAppointmentLoading && !makeAppointmentLoading) {
            if (!makeAppointmentLoadError) {
                const currentDate: Date = new Date();
                
                getTimeTable(currentDate.toISOString(), doctorId);
            }
        }
    }
    
    render() {
        const {
            timetable, specializationId, doctorId, timetableUnits,
            getTimeTableUnits, timetableUnitsLoading, timetableUnitsLoadError,
            makeAppointmentLoadError, makeAppointmentLoading,
            patients,
        } = this.props;
        
        const selectItems = patients.map(patient => [
           patient.id, getFullName(patient),
        ]);
        
        const { patientId } = this.state;
        
        if (timetable && timetable.length > 0) {
            return (
                <div>
                    <div className='timetable-select-wrapper'>
                        <Select
                            size='large'
                            placeholder='Выберите пациента'
                            search
                            items={ selectItems }
                            value={ patientId }
                            onChange={ ev => this.setState({ patientId: ev.target.value }) }
                        />

                    </div>
                    
                    { patientId && (
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
                                path={ `/registrar/appointment/${specializationId}/${doctorId}/:date` }
                                render={
                                    ({ match }) => <RegistrarTimeTableUnits
                                        date={ match.params.date }
                                        units={ timetableUnits }
                                        getUnits={ (date) => getTimeTableUnits(date, doctorId) }
                                        loading={ timetableUnitsLoading }
                                        loadError={ timetableUnitsLoadError }
                                        onMakeAppointment={ this.onMakeAppointment }
                                        makeAppointmentLoading={ makeAppointmentLoading }
                                        makeAppointmentLoadError={ makeAppointmentLoadError }
                                    />
                                }
                            />
                        </div>
                    )}
                </div>
                
            );
        }
        
        // TODO loading?
        return null;
    }
    
    onMakeAppointment = (appointment) => {
        const {
            doctorId,
            makeAppointment
        } = this.props;
        const { patientId } = this.state;
        
        makeAppointment({
            ...appointment,
            doctorNumber: doctorId,
            patientId,
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
                to={ `/registrar/appointment/${specializationId}/${doctorId}/${timetableUnit.date}` }
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
        patients: patient.patients,
        user: user.user,
        patient: patient.patient,
        makeAppointmentLoading: patient.makeAppointmentLoading,
        makeAppointmentLoadError: patient.makeAppointmentLoadError,
        timetable: timetable.timetable,
        timetableUnits: timetable.timetableUnits,
        timetableLoading: timetable.timetableLoading,
        timetableLoadError: timetable.timetableLoadError,
        timetableUnitsLoading: timetable.timetableUnitsLoading,
        timetableUnitsLoadError: timetable.timetableUnitsLoadError,
        patientsLoading: patient.patientsLoading,
        patientsLoadError: patient.patientsLoadError,
    };
};

const actions = {
    getPatients: getPatientsAction,
    getTimeTable: loadTimetableAction,
    getTimeTableUnits: loadTimetableUnitsAction,
    makeAppointment: makeAppointmentAction,
};

export default withRouter(connect(props, actions)(RegistrarTimeTable));




