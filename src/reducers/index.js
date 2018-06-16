// @flow
import { combineReducers } from 'redux';
import doctor from './doctor';
import timetable from './timetable';

export default combineReducers({
    doctor,
    timetable,
});
