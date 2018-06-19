import { createAction } from 'redux-actions';

import {
    LOAD_TIMETABLE,
    LOAD_TIMETABLE_UNITS,
    START,
    FAIL,
    SUCCESS,
} from '../constants/actions';
import { TimetableApi } from '../api/timetable';

const loadTimetableStart = createAction(LOAD_TIMETABLE + START);
const loadTimetableSuccess = createAction(LOAD_TIMETABLE + SUCCESS);
const loadTimetableFail = createAction(LOAD_TIMETABLE + FAIL);

export const loadTimetableAction = (date: string, doctorNumber: number) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(loadTimetableStart());
            const response = await TimetableApi.getTable(date, doctorNumber);
            dispatch(loadTimetableSuccess(response.data));
        } catch (err) {
            dispatch(loadTimetableFail(err));
        }
    };
};

const loadTimetableUnitsStart = createAction(LOAD_TIMETABLE_UNITS + START);
const loadTimetableUnitsSuccess = createAction(LOAD_TIMETABLE_UNITS + SUCCESS);
const loadTimetableUnitsFail = createAction(LOAD_TIMETABLE_UNITS + FAIL);

export const loadTimetableUnitsAction = (date: string, doctorNumber: number) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(loadTimetableUnitsStart());
            const response = await TimetableApi.getUnits(date, doctorNumber);
            dispatch(loadTimetableUnitsSuccess(response.data));
        } catch (err) {
            dispatch(loadTimetableUnitsFail(err));
        }
    };
};

