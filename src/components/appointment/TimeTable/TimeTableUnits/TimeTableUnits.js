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
        const { units } = this.props;
        
        return (
            <div className='timetable-units'>
                {
                    units.map(unit => {
                        const classes = cn({
                            'timetable-unit': true,
                            'timetable-unit-free': unit.status === 'FREE',
                            'timetable-unit-busy': unit.status === 'BUSY',
                        });
                        
                        return (
                            <div className={ classes }>
                                { formatTime(unit.startTime) } - { formatTime(unit.endTime) }
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

