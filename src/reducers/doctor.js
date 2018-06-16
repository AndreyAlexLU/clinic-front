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
import type { DoctorType } from '../models/Doctor';

const initialState = {
    doctors: [],
    doctorsBySpec: [],
    specializations: [],
    
    doctorsLoading: false,
    doctorsLoadError: null,
    doctorsBySpecLoading: false,
    doctorsBySpecLoadError: null,
    specializationsLoading: false,
    specializationsLoadError: null,
};

export default handleActions({
    [ LOAD_DOCTORS + START ]: (state, { payload }) => {
        return {
            ...state,
            doctorsLoading: true,
            doctorsLoadError: null,
        }
    },
    [ LOAD_DOCTORS + SUCCESS ]: (state, { payload }) => {
        return {
            ...state,
            doctorsLoading: false,
            doctors: payload,
        }
    },
    [ LOAD_DOCTORS + FAIL ]: (state, { payload }) => {
        return {
            ...state,
            doctorsLoading: false,
            doctorsLoadError: payload,
        }
    },
    [ LOAD_DOCTORS_BY_SPEC + START ]: (state, { payload }) => {
        return {
            ...state,
            doctorsBySpecLoading: true,
            doctorsBySpecLoadError: null,
        }
    },
    [ LOAD_DOCTORS_BY_SPEC + SUCCESS ]: (state, { payload }) => {
        return {
            ...state,
            doctorsBySpecLoading: false,
            doctorsBySpec: payload,
        }
    },
    [ LOAD_DOCTORS_BY_SPEC + FAIL ]: (state, { payload }) => {
        return {
            ...state,
            doctorsBySpecLoading: false,
            doctorsBySpecLoadError: payload,
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
