import { axiosInstance } from '../axiosInstance';

const prefix = '/api/timetable';

export const TimetableApi = {
    getUnits(date) {
        return axiosInstance.get(`${prefix}/getUnits/${date}`)
    },
    
    getTable(date) {
        return axiosInstance.get(`${prefix}/getTable/${date}`)
    }
};
