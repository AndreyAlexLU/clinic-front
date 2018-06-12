import { createAction } from 'redux-actions';
import { DoctorsApi } from '../api/doctor';

import {
    LOAD_DOCTORS,
    LOAD_DOCTORS_BY_SPEC,
    GET_SPECIALIZATIONS,
    START,
    FAIL,
    SUCCESS,
} from '../constants/actions';

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
            dispatch(loadDoctorsStart());
            const response = await DoctorsApi.getBySpec(spec);
            dispatch(loadDoctorsSuccess(response.data));
        } catch (err) {
            dispatch(loadDoctorsFail(err));
        }
    };
};
