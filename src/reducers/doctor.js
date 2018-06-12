// @flow

import {
    LOAD_DOCTORS,
    LOAD_DOCTORS_BY_SPEC,
    GET_SPECIALIZATIONS,
    START,
    SUCCESS,
    FAIL,
} from '../constants/actions';
import { handleActions } from 'redux-actions';

const initialState = {
    doctors: [],
    doctorsLoading: false,
    specializations: [],
    
    specializationsLoading: false,
    specializationsLoadError: null,
    
    doctorsBySpec: {},
};

export default handleActions({
    [ LOAD_DOCTORS + START ]: (state, { payload }) => {
        return {
            ...state,
        }
    },
    [ LOAD_DOCTORS + SUCCESS ]: (state, { payload }) => {
        return {
            ...state,
        }
    },
    [ LOAD_DOCTORS + FAIL ]: (state, { payload }) => {
        return {
            ...state,
        }
    },
    [ LOAD_DOCTORS_BY_SPEC + START ]: (state, { payload }) => {
        return {
            ...state,
        }
    },
    [ LOAD_DOCTORS_BY_SPEC + SUCCESS ]: (state, { payload }) => {
        return {
            ...state,
        }
    },
    [ LOAD_DOCTORS_BY_SPEC + FAIL ]: (state, { payload }) => {
        return {
            ...state,
        }
    },
    [ GET_SPECIALIZATIONS + START ]: (state, { payload }) => {
        return {
            ...state,
            specializationsLoading: true,
            specializationsLoadError: null,
        }
    },
    [ GET_SPECIALIZATIONS + SUCCESS ]: (state, { payload }) => {
        return {
            ...state,
            specializationsLoading: false,
            specializations: payload,
        }
    },
    [ GET_SPECIALIZATIONS + FAIL ]: (state, { payload }) => {
        return {
            ...state,
            specializationsLoading: false,
            specializationsLoadError: payload,
        }
    },
}, initialState);
