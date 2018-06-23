import { createAction } from 'redux-actions';
import { AdminApi } from '../api/admin';

import {
    START,
    FAIL,
    SUCCESS,
    GET_STATISTICS,
    GET_PATIENTS_NUMBER,
} from '../constants/actions';

const getPatientsNumberStart = createAction(GET_PATIENTS_NUMBER + START);
const getPatientsNumberSuccess = createAction(GET_PATIENTS_NUMBER + SUCCESS);
const getPatientsNumberFail = createAction(GET_PATIENTS_NUMBER + FAIL);

export const getPatientsNumberAction = () => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(getPatientsNumberStart());
            const response = await AdminApi.get();
            dispatch(getPatientsNumberSuccess(response.data));
        } catch (err) {
            dispatch(getPatientsNumberFail(err));
        }
    };
};

const getStatisticsStart = createAction(GET_STATISTICS + START);
const getStatisticsSuccess = createAction(GET_STATISTICS + SUCCESS);
const getStatisticsFail = createAction(GET_STATISTICS + FAIL);

export const getStatisticsAction = (isMonth: boolean) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(getStatisticsStart());
            const response = await AdminApi.getStatistics(isMonth);
            dispatch(getStatisticsSuccess(response.data));
        } catch (err) {
            dispatch(getStatisticsFail(err));
        }
    };
};
