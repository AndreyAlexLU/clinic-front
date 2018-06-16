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
        const timetable: TimeTableUnit[][] = transformTimeTable(payload);
        
        return {
            ...state,
            timetableLoading: false,
            timetable,
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

function transformTimeTable(timetable: TimeTableUnit[][]) {
    return timetable.reduce((result: TimeTableUnit[][], current: TimeTableUnit[]) => {
        const index: number = result.length - 1;
        const currentTimeTableUnit = current[0];
        const date: Date = new Date(currentTimeTableUnit.date);
        const dayNum: number = date.getDay();
        
        result[index].push(currentTimeTableUnit);
        if (dayNum === 0) {
            result.push([]);
        }
        
        return result;
    }, [
        [],
    ])
}
