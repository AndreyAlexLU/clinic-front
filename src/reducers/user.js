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
} from '../constants/actions';
import { handleActions } from 'redux-actions';

const initialState = {
    user: {},
    users: [],
    createdUserRole: 1,
    token: null,
    
    createUserLoading: false,
    createUserLoadError: null,
};

export default handleActions({
    [ CREATE_USER + START ]: (state, { payload }) => {
        return {
            ...state,
            createUserLoading: true,
            createUserLoadError: null,
        }
    },
    [ CREATE_USER + SUCCESS ]: (state, { payload }) => {
        return {
            ...state,
            createdUserRole: payload,
            createUserLoading: false,
        }
    },
    [ CREATE_USER + FAIL ]: (state, { payload }) => {
        return {
            ...state,
            createUserLoading: false,
            createUserLoadError: payload,
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
    [ LOGOUT_USER ]: (state, { payload }) => {
        return {
            ...state,
            user: {},
            token: null,
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
    [ GET_USERS_BY_ROLE + START ]: (state, { payload }) => {
        return {
            ...state,
        }
    },
    [ GET_USERS_BY_ROLE + SUCCESS ]: (state, { payload }) => {
        return {
            ...state,
            users: payload,
        }
    },
    [ GET_USERS_BY_ROLE + FAIL ]: (state, { payload }) => {
        return {
            ...state,
        }
    },
}, initialState);
