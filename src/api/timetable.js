import { axiosInstance } from '../axiosInstance';

const prefix = '/timetable';

export const TimetableApi = {
    getUnits(date, doctorNumber) {
        return axiosInstance.post(`${prefix}/getUnits`, {
            date,
            doctorNumber,
        })
    },
    
    getTable(date, doctorNumber) {
        return axiosInstance.post(`${prefix}/getTable`, {
            date,
            doctorNumber,
        })
    }
};
