// @flow

import {
    START,
    SUCCESS,
    FAIL,
    LOGIN_USER,
    CREATE_USER,
    GET_USER,
} from '../constants/actions';
import { handleActions } from 'redux-actions';

const initialState = {
    user: {},
    token: null,
};

export default handleActions({
    [ CREATE_USER + START ]: (state, { payload }) => {
        return {
            ...state,
        }
    },
    [ CREATE_USER + SUCCESS ]: (state, { payload }) => {
        return {
            ...state,
            user: payload.user,
            token: payload.token,
        }
    },
    [ CREATE_USER + FAIL ]: (state, { payload }) => {
        return {
            ...state,
        }
    },
    [ LOGIN_USER + START ]: (state, { payload }) => {
        return {
            ...state,
        }
    },
    [ LOGIN_USER + SUCCESS ]: (state, { payload }) => {
        return {
            ...state,
            user: payload.user,
            token: payload.token,
        }
    },
    [ LOGIN_USER + FAIL ]: (state, { payload }) => {
        return {
            ...state,
        }
    },
    [ GET_USER + START ]: (state, { payload }) => {
        return {
            ...state,
        }
    },
    [ GET_USER + SUCCESS ]: (state, { payload }) => {
        return {
            ...state,
            user: payload,
        }
    },
    [ GET_USER + FAIL ]: (state, { payload }) => {
        return {
            ...state,
        }
    },
}, initialState);
