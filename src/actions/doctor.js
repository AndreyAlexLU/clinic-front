import { createAction } from 'redux-actions';
import { DoctorsApi } from '../api/doctor';

import {
    LOAD_DOCTORS,
    LOAD_DOCTORS_BY_SPEC,
    GET_SPECIALIZATIONS,
    START,
    FAIL,
    SUCCESS, SAVE_DOCTOR,
} from '../constants/actions';
import Doctor from '../components/appointment/Doctors/Doctor/Doctor';
import type { DoctorType } from '../models/Doctor';

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
