// @flow
import React, { Component } from 'react';
import cn from 'classnames';
import type { TimeTableUnitType } from '../../../../models/TimeTableUnit';
import './timeTableUnits.css';
import { formatTime } from '../../../../utils/formatTime';

type Props = {|
    date: string,
    units: TimeTableUnitType[],
    loading: boolean,
    loadError: ?Error,
    
    getUnits: (date: string) => void,
    onMakeAppointment: (appointment) => void,
|};

export default class TimeTableUnits extends Component<Props, *> {
    componentDidMount() {
        const { date, getUnits } = this.props;
    
        getUnits(date);
    }
    
    componentDidUpdate(prevProps: Props) {
        const { date, getUnits } = this.props;
        
        if (prevProps.date !== date) {
            getUnits(date);
        }
    }
    
    render() {
        const { date, units, onMakeAppointment } = this.props;
        
        return (
            <div className='timetable-units'>
                {
                    units.map(unit => {
                        const classes = cn({
                            'timetable-unit': true,
                            'timetable-unit-free': unit.status === 'FREE',
                            'timetable-unit-busy': unit.status === 'BUSY',
                        });
                        
                        const onMakeAppointmentLocal = () => onMakeAppointment({
                            date,
                            startTime: unit.startTime,
                            endTime: unit.endTime,
                        });
                        
                        return (
                            <div className={ classes } onClick={ onMakeAppointmentLocal }>
                                { formatTime(unit.startTime) } - { formatTime(unit.endTime) }
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

