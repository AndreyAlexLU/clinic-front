// @flow

import {
    START,
    SUCCESS,
    FAIL,
    LOGIN_USER,
    LOGOUT_USER,
    CREATE_USER,
    GET_USER,
    GET_USERS_BY_ROLE,
    MAKE_APPOINTMENT,
    SAVE_PATIENT,
    GET_PATIENT,
    GET_PATIENTS,
    GET_APPOINTMENTS,
    CANCEL_APPOINTMENT,
} from '../constants/actions';
import { handleActions } from 'redux-actions';

const initialState = {
    patient: {},
    patients: [],
    appointments: [],
    
    makeAppointmentLoading: false,
    makeAppointmentLoadError: null,
    savePatientLoading: false,
    savePatientLoadError: null,
    patientLoading: false,
    patientLoadError: null,
    patientsLoading: false,
    patientsLoadError: null,
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
    [ CANCEL_APPOINTMENT + START ]: (state, { payload }) => {
        return {
            ...state,
        }
    },
    [ CANCEL_APPOINTMENT + SUCCESS ]: (state, { payload }) => {
        const index = state.appointments.findIndex(a => a.id === payload);
        
        if (index > -1) {
            return {
                ...state,
                appointments: [
                    ...state.appointments.slice(0, index),
                    ...state.appointments.slice(index + 1)
                ]
            }
        } else {
            return state;
        }
        
    },
    [ CANCEL_APPOINTMENT + FAIL ]: (state, { payload }) => {
        return {
            ...state,
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
    [ GET_PATIENTS + START ]: (state, { payload }) => {
        return {
            ...state,
            patientsLoading: true,
            patientsLoadError: null,
        }
    },
    [ GET_PATIENTS + SUCCESS ]: (state, { payload }) => {
        return {
            ...state,
            patientsLoading: false,
            patients: payload,
        }
    },
    [ GET_PATIENTS + FAIL ]: (state, { payload }) => {
        return {
            ...state,
            patientsLoading: false,
            patientsLoadError: null,
        }
    },
}, initialState);
