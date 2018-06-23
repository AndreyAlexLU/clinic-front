// @flow

import {
    LOAD_DOCTORS,
    LOAD_DOCTOR,
    LOAD_DOCTORS_BY_SPEC,
    GET_SPECIALIZATIONS,
    START,
    SUCCESS,
    FAIL, SAVE_DOCTOR, UPDATE_SCHEDULE, GET_SCHEDULE, GET_DOCTOR_APPOINTMENTS, SAVE_CARD_ITEM,
} from '../constants/actions';
import { handleActions } from 'redux-actions';
import type { DoctorType } from '../models/Doctor';

const initialState = {
    appointments: [],
    doctors: [],
    doctor: {},
    doctorsBySpec: [],
    specializations: [],
    schedule: {
        step: 15,
        weekIntervals: [],
    },
    
    doctorLoading: false,
    doctorLoadError: null,
    doctorsLoading: false,
    doctorsLoadError: null,
    doctorsBySpecLoading: false,
    doctorsBySpecLoadError: null,
    specializationsLoading: false,
    specializationsLoadError: null,
    doctorSaving: false,
    doctorSaveError: null,
    scheduleUpdating: false,
    scheduleUpdateError: null,
    scheduleLoading: false,
    scheduleLoadError: null,
    appointmentsLoading: false,
    appointmentsLoadError:null,
    saveCardItemLoading: false,
    saveCardItemLoadError: null,
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
    
    [ GET_DOCTOR_APPOINTMENTS + START ]: (state, { payload }) => {
        return {
            ...state,
            appointmentsLoading: true,
            appointmentsLoadError: null,
        }
    },
    [ GET_DOCTOR_APPOINTMENTS + SUCCESS ]: (state, { payload }) => {
        return {
            ...state,
            appointmentsLoading: false,
            appointments: payload,
        }
    },
    [ GET_DOCTOR_APPOINTMENTS + FAIL ]: (state, { payload }) => {
        return {
            ...state,
            appointmentsLoading: false,
            appointmentsLoadError: payload,
        }
    },
    
    [ LOAD_DOCTOR + START ]: (state, { payload }) => {
        return {
            ...state,
            doctorLoading: true,
            doctorLoadError: null,
        }
    },
    [ LOAD_DOCTOR + SUCCESS ]: (state, { payload }) => {
        return {
            ...state,
            doctorLoading: false,
            doctor: payload,
        }
    },
    [ LOAD_DOCTOR + FAIL ]: (state, { payload }) => {
        return {
            ...state,
            doctorLoading: false,
            doctorLoadError: payload,
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
    [ SAVE_DOCTOR + START ]: (state, { payload }) => {
        return {
            ...state,
            doctorSaving: true,
            doctorSaveError: null,
        }
    },
    [ SAVE_DOCTOR + SUCCESS ]: (state, { payload }) => {
        return {
            ...state,
            doctorSaving: false,
        }
    },
    [ SAVE_DOCTOR + FAIL ]: (state, { payload }) => {
        return {
            ...state,
            doctorSaving: false,
            doctorSaveError: payload,
        }
    },
    [ UPDATE_SCHEDULE + START ]: (state, { payload }) => {
        return {
            ...state,
            scheduleUpdating: true,
            scheduleUpdateError: null,
        }
    },
    [ UPDATE_SCHEDULE + SUCCESS ]: (state, { payload }) => {
        return {
            ...state,
            schedule: payload,
            scheduleUpdating: false,
        }
    },
    [ UPDATE_SCHEDULE + FAIL ]: (state, { payload }) => {
        return {
            ...state,
            scheduleUpdating: false,
            scheduleUpdateError: payload,
        }
    },
    [ GET_SCHEDULE + START ]: (state, { payload }) => {
        return {
            ...state,
            scheduleLoading: true,
            scheduleLoadError: null,
        }
    },
    [ GET_SCHEDULE + SUCCESS ]: (state, { payload }) => {
        return {
            ...state,
            schedule: payload,
            scheduleLoading: false,
        }
    },
    [ GET_SCHEDULE + FAIL ]: (state, { payload }) => {
        return {
            ...state,
            scheduleLoading: false,
            scheduleLoadError: payload,
        }
    },
    [ SAVE_CARD_ITEM + START ]: (state, { payload }) => {
        return {
            ...state,
            saveCardItemLoading: true,
            saveCardItemLoadError: null,
        }
    },
    [ SAVE_CARD_ITEM + SUCCESS ]: (state, { payload }) => {
        return {
            ...state,
            saveCardItemLoading: false,
        }
    },
    [ SAVE_CARD_ITEM + FAIL ]: (state, { payload }) => {
        return {
            ...state,
            saveCardItemLoading: false,
            saveCardItemLoadError: payload,
        }
    },
}, initialState);
