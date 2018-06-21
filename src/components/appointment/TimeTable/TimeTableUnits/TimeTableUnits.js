// @flow
import React, { Component } from 'react';
import cn from 'classnames';
import type { TimeTableUnitType } from '../../../../models/TimeTableUnit';
import './timeTableUnits.css';
import { formatTime } from '../../../../utils/formatTime';
import AppointmentModal from '../../../AppointmentModal/AppointmentModal';

type Props = {|
    date: string,
    units: TimeTableUnitType[],
    loading: boolean,
    loadError: ?Error,
    makeAppointmentLoading: boolean,
    makeAppointmentLoadError: ?Error,
    
    getUnits: (date: string) => void,
    onMakeAppointment: (appointment) => void,
|};

type State = {
    modalOpened: boolean,
    startTime: string,
    endTime: string,
};

export default class TimeTableUnits extends Component<Props, State> {
    state = {
        modalOpened: false,
        startTime: null,
        endTime: null,
    };
    
    componentDidMount() {
        const { date, getUnits } = this.props;
    
        getUnits(date);
    }
    
    componentDidUpdate(prevProps: Props) {
        const { date, getUnits, makeAppointmentLoading, makeAppointmentLoadError } = this.props;
        
        if (prevProps.date !== date) {
            getUnits(date);
        }
    
        if (prevProps.makeAppointmentLoading !== makeAppointmentLoading) {
            if (!makeAppointmentLoadError) {
                getUnits(date);
            }
        }
    }
    
    render() {
        const { units } = this.props;
        const { modalOpened } = this.state;
        
        return (
            <div className='timetable-units'>
                {
                    units.map(unit => {
                        const classes = cn({
                            'timetable-unit': true,
                            'timetable-unit-free': unit.status === 'FREE',
                            'timetable-unit-busy': unit.status === 'BUSY',
                        });
    
                        const onClick = () => {
                            this.onOpenModal(unit.startTime, unit.endTime)
                        };
    
                        return (
                            <div className={ classes } onClick={ onClick }>
                                { formatTime(unit.startTime) } - { formatTime(unit.endTime) }
                            </div>
                        )
                    })
                }
    
                { modalOpened && (
                    <AppointmentModal
                        onConfirm={ this.onMakeAppointment }
                        onClose={ this.onCloseModal }
                    />
                )}
            </div>
        );
    }
    
    onMakeAppointment = () => {
        const { startTime, endTime } = this.state;
        const { date, onMakeAppointment } = this.props;
        
        onMakeAppointment({
            date,
            startTime,
            endTime,
        });
        
        this.onCloseModal();
    };
    
    onOpenModal = (startTime: string, endTime: string) => {
        this.setState({
            modalOpened: true,
            startTime,
            endTime,
        })
    };
    
    onCloseModal = () => {
        this.setState({modalOpened: false})
    };
}

