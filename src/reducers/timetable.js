// @flow

import {
    START,
    SUCCESS,
    FAIL,
    LOAD_TIMETABLE,
    LOAD_TIMETABLE_UNITS,
} from '../constants/actions';
import { handleActions } from 'redux-actions';
import type { TimeTableItem } from '../models/TimeTableItem';

const initialState = {
    timetable: [],
    timetableUnits: [],
    
    timetableLoading: false,
    timetableLoadError: null,
    timetableUnitsLoading: false,
    timetableUnitsLoadError: null,
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
    [ LOAD_TIMETABLE_UNITS + START ]: (state, { payload }) => {
        return {
            ...state,
            timetableUnitsLoading: true,
            timetableUnitsLoadError: null,
        }
    },
    [ LOAD_TIMETABLE_UNITS + SUCCESS ]: (state, { payload }) => {
        return {
            ...state,
            timetableUnitsLoading: false,
            timetableUnits: payload,
        }
    },
    [ LOAD_TIMETABLE_UNITS + FAIL ]: (state, { payload }) => {
        return {
            ...state,
            timetableUnitsLoading: false,
            timetableUnitsLoadError: payload,
        }
    },
}, initialState);

function transformTimeTable(timetable: TimeTableItem[][]) {
    return timetable.reduce((result: TimeTableItem[][], current: TimeTableItem[]) => {
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
