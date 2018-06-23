import { axiosInstance } from '../axiosInstance';
import type { DoctorType } from '../models/Doctor';
import type { ScheduleType } from '../models/Schedule';
import type { CardItem } from '../models/CardItem';

const prefix = '/admin';

export const AdminApi = {
    get() {
        return axiosInstance.get(`${prefix}/get`);
    },
    
    getStatistics(isMonth) {
        return axiosInstance.get(`${prefix}/getStatistics/${isMonth}`);
    },
};
