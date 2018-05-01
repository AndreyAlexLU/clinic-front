import React from 'react';
import './timetable.css';
import DatePicker from 'react-datepicker';

export default class TimeTable extends React.Component {
    render() {
        return (
            <div>
                <DatePicker
                    inline
                    selected={new Date()}
                    onChange={this.handleChange}
                />
            </div>

        );
    }

    handleChange() {
    }
}



