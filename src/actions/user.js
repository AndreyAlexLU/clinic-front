import { createAction } from 'redux-actions';

import {
    LOGIN_USER,
    LOGOUT_USER,
    CREATE_USER,
    GET_USER,
    GET_USERS_BY_ROLE,
    START,
    FAIL,
    SUCCESS,
} from '../constants/actions';
import { UserApi } from '../api/user';
import type { User } from '../models/User';

const createUserStart = createAction(CREATE_USER + START);
const createUserSuccess = createAction(CREATE_USER + SUCCESS);
const createUserFail = createAction(CREATE_USER + FAIL);

export const createUserAction = (userData: User) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(createUserStart());
            const response = await UserApi.create(userData);
            dispatch(createUserSuccess(userData.roleId));
        } catch (err) {
            dispatch(createUserFail(err));
        }
    };
};

const loginUserStart = createAction(LOGIN_USER + START);
const loginUserSuccess = createAction(LOGIN_USER + SUCCESS);
const loginUserFail = createAction(LOGIN_USER + FAIL);

export const loginUserAction = (userData) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(loginUserStart());
            const response = await UserApi.login(userData);
            dispatch(loginUserSuccess(response.data));
        } catch (err) {
            dispatch(loginUserFail(err));
        }
    };
};

const getUserStart = createAction(GET_USER + START);
const getUserSuccess = createAction(GET_USER + SUCCESS);
const getUserFail = createAction(GET_USER + FAIL);

export const getUserAction = (login) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(getUserStart());
            const response = await UserApi.get(login);
            dispatch(getUserSuccess(response.data));
        } catch (err) {
            dispatch(getUserFail(err));
        }
    };
};

const getUsersByRoleStart = createAction(GET_USERS_BY_ROLE + START);
const getUsersByRoleSuccess = createAction(GET_USERS_BY_ROLE + SUCCESS);
const getUsersByRoleFail = createAction(GET_USERS_BY_ROLE + FAIL);

export const getUsersByRoleAction = (roleId) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(getUsersByRoleStart());
            const response = await UserApi.getByRole(roleId);
            dispatch(getUsersByRoleSuccess(response.data));
        } catch (err) {
            dispatch(getUsersByRoleFail(err));
        }
    };
};

export const logoutUserAction = (roleId) => {
    return async (dispatch: Dispatch) => {
        const logoutUser = createAction(LOGOUT_USER);
        dispatch(logoutUser());
    };
};



