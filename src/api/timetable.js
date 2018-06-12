import { axiosInstance } from '../axiosInstance';

const prefix = '/timetable';

export const TimetableApi = {
    getUnits(date) {
        return axiosInstance.get(`${prefix}/getUnits/${date}`)
    },
    
    getTable(date) {
        return axiosInstance.get(`${prefix}/getTable/${date}`)
    }
};
