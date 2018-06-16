// @flow
import { combineReducers } from 'redux';
import user from './user';
import doctor from './doctor';
import timetable from './timetable';

export default combineReducers({
    user,
    doctor,
    timetable,
});
