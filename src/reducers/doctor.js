// @flow

import {
    LOAD_DOCTORS,
    LOAD_DOCTORS_BY_SPEC,
    START,
    SUCCESS,
    FAIL,
} from '../constants/actions';
import { handleActions } from 'redux-actions';

const initialState = {
    doctors: [],
    doctorsLoading: false,
    
    doctorsBySpec: {},
};

export default handleActions({
    [ LOAD_DOCTORS + START ]: (state, { payload }) => {
    
    },
    [ LOAD_DOCTORS + SUCCESS ]: (state, { payload }) => {
    
    },
    [ LOAD_DOCTORS + FAIL ]: (state, { payload }) => {
    
    },
    [ LOAD_DOCTORS_BY_SPEC + START ]: (state, { payload }) => {
    
    },
    [ LOAD_DOCTORS_BY_SPEC + SUCCESS ]: (state, { payload }) => {
    
    },
    [ LOAD_DOCTORS_BY_SPEC + FAIL ]: (state, { payload }) => {
    
    },
}, initialState);
