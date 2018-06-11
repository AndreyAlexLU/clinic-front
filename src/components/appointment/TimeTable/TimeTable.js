import React from 'react';
import './timetable.css';
import DatePicker from 'react-date-picker';

export default class TimeTable extends React.Component {
    render() {
        return (
            <div className='timetable'>
                { [...Array(5).keys()].map(i => (
                    <div className='timetable-row'>
                        { [...Array(7).keys()].map(j => this.renderCell(i, j))}
                    </div>
                ))}
            </div>

        );
    }
    
    renderCell(i, j) {
        const currentDate: Date = new Date();
        const date: Date = this.getNextDate(currentDate, 7*i + j);
        
        return (
            <div className='timetable-column'>
                <div>
                    { date.getDate() }
                </div>
                <div>
                    { this.getMonthByNumber(date.getMonth())[1] }
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
            0: ['Январь', 'Января'],
            1: ['Февраль', 'Февраля'],
            2: ['Март', 'Марта'],
            3: ['Апрель', 'Апреля'],
            4: ['Май', 'Мая'],
            5: ['Июнь', 'Июня'],
            6: ['Июль', 'Июля'],
            7: ['Август', 'Августа'],
            8: ['Сентябрь', 'Сентября'],
            9: ['Октябрь', 'Октября'],
            10: ['Ноябрь', 'Ноября'],
            11: ['Декабрь', 'Декабря'],
        };
        
        return map[monthNumber];
    }

    handleChange() {
    }
}



