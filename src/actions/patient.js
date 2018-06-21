import { createAction } from 'redux-actions';

import {
    START,
    FAIL,
    SUCCESS,
    MAKE_APPOINTMENT, SAVE_PATIENT, GET_PATIENT,
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
