// @flow
import { combineReducers } from 'redux';
import user from './user';
import doctor from './doctor';
import timetable from './timetable';
import patient from './patient';
import admin from './admin';

export default combineReducers({
    user,
    doctor,
    timetable,
    patient,
    admin,
});
