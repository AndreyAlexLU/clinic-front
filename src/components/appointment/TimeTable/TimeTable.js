// @flow
import React from 'react';
import './timetable.css';
import { connect } from 'react-redux';
import { loadTimetableAction } from '../../../actions/timetable';
import timetable from '../../../reducers/timetable';
import type { TimeTableUnit } from '../../../models/TimeTable';

type Props = {
    timetable: TimeTableUnit[][],
    loading: boolean,
    loadError: ?Error,
    
    getTimeTable: (date: string) => void,
};

class TimeTable extends React.Component<Props, *> {
    
    componentDidMount() {
        const currentDate: Date = new Date();
        this.props.getTimeTable(currentDate.toISOString());
    }
    
    render() {
        const { timetable } = this.props;
        
        if (timetable && timetable.length > 0) {
            return (
                <div className='timetable'>
                    { timetable.map(timetableWeek => (
                        <div className='timetable-row'>
                            { timetableWeek.map(timetableUnit => this.renderCell(timetableUnit)) }
                        </div>
                    )) }
                </div>
    
            );
        }
        
        // TODO loading?
        return null;
    }
    
    renderCell(timetableUnit: TimeTableUnit) {
        const date: Date = new Date(timetableUnit.date);
        
        return (
            <div className='timetable-column'>
                <div>
                    { date.getDate() }
                </div>
                <div>
                    { this.getMonthByNumber(date.getMonth())[ 1 ] }
                </div>
                <div>
                    Талонов { timetableUnit.count }
                </div>
            </div>
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

const props = ({ timetable }) => {
    return {
        timetable: timetable.timetable,
        loading: timetable.timetableLoading,
        loadError: timetable.timetableLoadError,
    };
};

const actions = {
    getTimeTable: loadTimetableAction,
};

export default connect(props, actions)(TimeTable);




