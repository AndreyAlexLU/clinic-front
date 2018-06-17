import { createAction } from 'redux-actions';

import {
    LOGIN_USER,
    CREATE_USER,
    CHECK_TOKEN,
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
            dispatch(createUserSuccess(response.data));
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
