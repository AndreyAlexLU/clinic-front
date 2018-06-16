// @flow

import {
    LOAD_DOCTORS,
    LOAD_DOCTORS_BY_SPEC,
    GET_SPECIALIZATIONS,
    START,
    SUCCESS,
    FAIL, LOAD_TIMETABLE,
} from '../constants/actions';
import { handleActions } from 'redux-actions';
import type { TimeTableUnit } from '../models/TimeTable';

const initialState = {
    timetable: [],
    
    timetableLoading: false,
    timetableLoadError: null,
};

export default handleActions({
    [ LOAD_TIMETABLE + START ]: (state, { payload }) => {
        return {
            ...state,
            timetableLoading: true,
            timetableLoadError: null,
        }
    },
    [ LOAD_TIMETABLE + SUCCESS ]: (state, { payload }) => {
        return {
            ...state,
            timetableLoading: false,
            timetable: payload,
        }
    },
    [ LOAD_TIMETABLE + FAIL ]: (state, { payload }) => {
        return {
            ...state,
            timetableLoading: false,
            timetableLoadError: payload,
        }
    },
}, initialState);
