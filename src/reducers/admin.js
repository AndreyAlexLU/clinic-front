// @flow

import { FAIL, GET_PATIENTS_NUMBER, GET_STATISTICS, MAKE_APPOINTMENT, START, SUCCESS, } from '../constants/actions';
import { handleActions } from 'redux-actions';
import type { Statistics } from '../models/Statistics';

const initialState = {
    patientsNumber: 0,
    statistics: {
        money: {},
        patients: {},
    },
};

export default handleActions({
    [ GET_PATIENTS_NUMBER + START ]: (state, { payload }) => {
        return {
            ...state,
        }
    },
    [ GET_PATIENTS_NUMBER + SUCCESS ]: (state, { payload }) => {
        return {
            ...state,
            patientsNumber: payload.count,
        }
    },
    [ GET_PATIENTS_NUMBER + FAIL ]: (state, { payload }) => {
        return {
            ...state,
        }
    },
    [ GET_STATISTICS + START ]: (state, { payload }) => {
        return {
            ...state,
        }
    },
    [ GET_STATISTICS + SUCCESS ]: (state, { payload }) => {
        return {
            ...state,
            statistics: payload,
        }
    },
    [ GET_STATISTICS + FAIL ]: (state, { payload }) => {
        return {
            ...state,
        }
    },
}, initialState);
