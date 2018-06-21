import { createAction } from 'redux-actions';

import {
    START,
    FAIL,
    SUCCESS,
    MAKE_APPOINTMENT,
    SAVE_PATIENT,
    GET_PATIENT,
    GET_APPOINTMENTS,
} from '../constants/actions';
import { PatientApi } from '../api/patient';
import type { TimeTableUnitType } from '../models/TimeTableUnit';
import type { PatientType } from '../models/Patient';

const makeAppointmentStart = createAction(MAKE_APPOINTMENT + START);
const makeAppointmentSuccess = createAction(MAKE_APPOINTMENT + SUCCESS);
const makeAppointmentFail = createAction(MAKE_APPOINTMENT + FAIL);

export const makeAppointmentAction = (appointment: TimeTableUnitType) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(makeAppointmentStart());
            const response = await PatientApi.makeAppointment(appointment);
            dispatch(makeAppointmentSuccess(response.data));
        } catch (err) {
            dispatch(makeAppointmentFail(err));
        }
    };
};

const getAppointmentsStart = createAction(GET_APPOINTMENTS + START);
const getAppointmentsSuccess = createAction(GET_APPOINTMENTS + SUCCESS);
const getAppointmentsFail = createAction(GET_APPOINTMENTS + FAIL);

export const getAppointmentsAction = (patientId: string) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(getAppointmentsStart());
            const response = await PatientApi.getAppointments(patientId);
            dispatch(getAppointmentsSuccess(response.data));
        } catch (err) {
            dispatch(getAppointmentsFail(err));
        }
    };
};

const savePatientStart = createAction(SAVE_PATIENT + START);
const savePatientSuccess = createAction(SAVE_PATIENT + SUCCESS);
const savePatientFail = createAction(SAVE_PATIENT + FAIL);

export const savePatientAction = (patient: PatientType) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(savePatientStart());
            const response = await PatientApi.savePatient(patient);
            dispatch(savePatientSuccess(response.data));
        } catch (err) {
            dispatch(savePatientFail(err));
        }
    };
};

const getPatientStart = createAction(GET_PATIENT + START);
const getPatientSuccess = createAction(GET_PATIENT + SUCCESS);
const getPatientFail = createAction(GET_PATIENT + FAIL);

export const getPatientAction = (login: string) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(getPatientStart());
            const response = await PatientApi.getPatient(login);
            dispatch(getPatientSuccess(response.data));
        } catch (err) {
            dispatch(getPatientFail(err));
        }
    };
};
