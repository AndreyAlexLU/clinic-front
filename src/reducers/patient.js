// @flow

import {
    START,
    SUCCESS,
    FAIL,
    LOGIN_USER,
    LOGOUT_USER,
    CREATE_USER,
    GET_USER,
    GET_USERS_BY_ROLE, MAKE_APPOINTMENT, SAVE_PATIENT, GET_PATIENT, GET_APPOINTMENTS,
} from '../constants/actions';
import { handleActions } from 'redux-actions';

const initialState = {
    patient: {},
    appointments: [],
    
    makeAppointmentLoading: false,
    makeAppointmentLoadError: null,
    savePatientLoading: false,
    savePatientLoadError: null,
    patientLoading: false,
    patientLoadError: null,
    appointmentsLoading: false,
    appointmentsLoadError: null,
};

export default handleActions({
    [ MAKE_APPOINTMENT + START ]: (state, { payload }) => {
        return {
            ...state,
            makeAppointmentLoading: true,
            makeAppointmentLoadError: null,
        }
    },
    [ MAKE_APPOINTMENT + SUCCESS ]: (state, { payload }) => {
        return {
            ...state,
            makeAppointmentLoading: false,
        }
    },
    [ MAKE_APPOINTMENT + FAIL ]: (state, { payload }) => {
        return {
            ...state,
            makeAppointmentLoading: false,
            makeAppointmentLoadError: payload,
        }
    },
    [ GET_APPOINTMENTS + START ]: (state, { payload }) => {
        return {
            ...state,
            appointmentsLoading: true,
            appointmentsLoadError: null,
        }
    },
    [ GET_APPOINTMENTS + SUCCESS ]: (state, { payload }) => {
        return {
            ...state,
            appointmentsLoading: false,
            appointments: payload,
        }
    },
    [ GET_APPOINTMENTS + FAIL ]: (state, { payload }) => {
        return {
            ...state,
            appointmentsLoading: false,
            appointmentsLoadError: payload,
        }
    },
    [ SAVE_PATIENT + START ]: (state, { payload }) => {
        return {
            ...state,
            savePatientLoading: true,
            savePatientLoadError: null,
        }
    },
    [ SAVE_PATIENT + SUCCESS ]: (state, { payload }) => {
        return {
            ...state,
            savePatientLoading: false,
        }
    },
    [ SAVE_PATIENT + FAIL ]: (state, { payload }) => {
        return {
            ...state,
            savePatientLoading: false,
            savePatientLoadError: null,
        }
    },
    [ GET_PATIENT + START ]: (state, { payload }) => {
        return {
            ...state,
            patientLoading: true,
            patientLoadError: null,
        }
    },
    [ GET_PATIENT + SUCCESS ]: (state, { payload }) => {
        return {
            ...state,
            patientLoading: false,
            patient: payload,
        }
    },
    [ GET_PATIENT + FAIL ]: (state, { payload }) => {
        return {
            ...state,
            patientLoading: false,
            patientLoadError: null,
        }
    },
}, initialState);
