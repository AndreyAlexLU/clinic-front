import React from 'react';
import './timetable.css';
import DatePicker from 'react-date-picker';

export default class TimeTable extends React.Component {
    render() {
        return (
            <div>
                <DatePicker
                    value={ new Date() }
                    onChange={ () => 1 }
                />
            </div>

        );
    }

    handleChange() {
    }
}



