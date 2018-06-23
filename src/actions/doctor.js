import { createAction } from 'redux-actions';
import { DoctorsApi } from '../api/doctor';

import {
    LOAD_DOCTORS,
    LOAD_DOCTOR,
    LOAD_DOCTORS_BY_SPEC,
    GET_SPECIALIZATIONS,
    START,
    FAIL,
    SUCCESS, SAVE_DOCTOR, UPDATE_SCHEDULE, GET_SCHEDULE, GET_DOCTOR_APPOINTMENTS, SAVE_CARD_ITEM,
} from '../constants/actions';
import Doctor from '../components/appointment/Doctors/Doctor/Doctor';
import type { DoctorType } from '../models/Doctor';
import type { ScheduleType } from '../models/Schedule';
import type { CardItem } from '../models/CardItem';

const loadDoctorsStart = createAction(LOAD_DOCTORS + START);
const loadDoctorsSuccess = createAction(LOAD_DOCTORS + SUCCESS);
const loadDoctorsFail = createAction(LOAD_DOCTORS + FAIL);

export const loadDoctorsAction = () => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(loadDoctorsStart());
            const response = await DoctorsApi.get();
            dispatch(loadDoctorsSuccess(response.data));
        } catch (err) {
            dispatch(loadDoctorsFail(err));
        }
    };
};

const getDoctorAppointmentsStart = createAction(GET_DOCTOR_APPOINTMENTS + START);
const getDoctorAppointmentsSuccess = createAction(GET_DOCTOR_APPOINTMENTS + SUCCESS);
const getDoctorAppointmentsFail = createAction(GET_DOCTOR_APPOINTMENTS + FAIL);

export const getDoctorAppointmentsAction = (doctorNumber:number) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(getDoctorAppointmentsStart());
            const response = await DoctorsApi.getAppointments(doctorNumber);
            dispatch(getDoctorAppointmentsSuccess(response.data));
        } catch (err) {
            dispatch(getDoctorAppointmentsFail(err));
        }
    };
};

const loadDoctorStart = createAction(LOAD_DOCTOR + START);
const loadDoctorSuccess = createAction(LOAD_DOCTOR + SUCCESS);
const loadDoctorFail = createAction(LOAD_DOCTOR + FAIL);

export const loadDoctorAction = (login) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(loadDoctorStart());
            const response = await DoctorsApi.getDoctor(login);
            dispatch(loadDoctorSuccess(response.data));
        } catch (err) {
            dispatch(loadDoctorFail(err));
        }
    };
};


const getSpecializationsStart = createAction(GET_SPECIALIZATIONS + START);
const getSpecializationsSuccess = createAction(GET_SPECIALIZATIONS + SUCCESS);
const getSpecializationsFail = createAction(GET_SPECIALIZATIONS + FAIL);

export const getSpecializationsAction = () => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(getSpecializationsStart());
            const response = await DoctorsApi.getSpecs();
            dispatch(getSpecializationsSuccess(response.data));
        } catch (err) {
            dispatch(getSpecializationsFail(err));
        }
    };
};

const loadDoctorsBySpecStart = createAction(LOAD_DOCTORS_BY_SPEC + START);
const loadDoctorsBySpecSuccess = createAction(LOAD_DOCTORS_BY_SPEC + SUCCESS);
const loadDoctorsBySpecFail = createAction(LOAD_DOCTORS_BY_SPEC + FAIL);

export const loadDoctorsBySpecAction = (spec: string) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(loadDoctorsBySpecStart());
            const response = await DoctorsApi.getBySpec(spec);
            dispatch(loadDoctorsBySpecSuccess(response.data));
        } catch (err) {
            dispatch(loadDoctorsBySpecFail(err));
        }
    };
};

const saveDoctorStart = createAction(SAVE_DOCTOR + START);
const saveDoctorSuccess = createAction(SAVE_DOCTOR + SUCCESS);
const saveDoctorFail = createAction(SAVE_DOCTOR + FAIL);

export const saveDoctorAction = (doctor: DoctorType) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(saveDoctorStart());
            const response = await DoctorsApi.saveDoctor(doctor);
            dispatch(saveDoctorSuccess(response.data));
        } catch (err) {
            dispatch(saveDoctorFail(err));
        }
    };
};

const updateScheduleStart = createAction(UPDATE_SCHEDULE + START);
const updateScheduleSuccess = createAction(UPDATE_SCHEDULE + SUCCESS);
const updateScheduleFail = createAction(UPDATE_SCHEDULE + FAIL);

export const updateScheduleAction = (schedule: ScheduleType) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(updateScheduleStart());
            const response = await DoctorsApi.updateSchedule(schedule);
            dispatch(updateScheduleSuccess(schedule));
        } catch (err) {
            dispatch(updateScheduleFail(err));
        }
    };
};

const getScheduleStart = createAction(GET_SCHEDULE + START);
const getScheduleSuccess = createAction(GET_SCHEDULE + SUCCESS);
const getScheduleFail = createAction(GET_SCHEDULE + FAIL);

export const getScheduleAction = (doctorNumber: number) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(getScheduleStart());
            const response = await DoctorsApi.getSchedule(doctorNumber);
            dispatch(getScheduleSuccess(response.data));
        } catch (err) {
            dispatch(getScheduleFail(err));
        }
    };
};

const saveCardItemStart = createAction(SAVE_CARD_ITEM + START);
const saveCardItemSuccess = createAction(SAVE_CARD_ITEM + SUCCESS);
const saveCardItemFail = createAction(SAVE_CARD_ITEM + FAIL);

export const saveCardItemAction = (cardItem: CardItem) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(saveCardItemStart());
            const response = await DoctorsApi.saveCardItem(cardItem);
            dispatch(saveCardItemSuccess(response.data));
        } catch (err) {
            dispatch(saveCardItemFail(err));
        }
    };
};
