import { createAction } from 'redux-actions';
import { DoctorsApi } from '../api/doctor';

import {
    LOAD_TIMETABLE,
    START,
    FAIL,
    SUCCESS,
} from '../constants/actions';
import { TimetableApi } from '../api/timetable';

const loadTimetableStart = createAction(LOAD_TIMETABLE + START);
const loadTimetableSuccess = createAction(LOAD_TIMETABLE + SUCCESS);
const loadTimetableFail = createAction(LOAD_TIMETABLE + FAIL);

export const loadTimetableAction = (date: string) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(loadTimetableStart());
            const response = await TimetableApi.getTable(date);
            dispatch(loadTimetableSuccess(response.data));
        } catch (err) {
            dispatch(loadTimetableFail(err));
        }
    };
};
