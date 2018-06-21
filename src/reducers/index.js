// @flow
import { combineReducers } from 'redux';
import user from './user';
import doctor from './doctor';
import timetable from './timetable';
import patient from './patient';

export default combineReducers({
    user,
    doctor,
    timetable,
    patient,
});
