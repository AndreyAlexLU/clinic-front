import { axiosInstance } from '../axiosInstance';
import type { DoctorType } from '../models/Doctor';
import type { ScheduleType } from '../models/Schedule';

const prefix = '/doctor';

export const DoctorsApi = {
    get() {
        return axiosInstance.get(`${prefix}/get`);
    },
    
    getDoctor(login) {
        return axiosInstance.get(`${prefix}/getDoctor/${login}`);
    },
    
    getSpecs() {
        return axiosInstance.get(`${prefix}/getSpecs`);
    },
    
    getBySpec(spec) {
        return axiosInstance.get(`${prefix}/getBySpec/${spec}`);
    },
    
    saveDoctor(doctor: DoctorType) {
        return axiosInstance.post(`${prefix}/save`, doctor);
    },
    
    updateSchedule(schedule: ScheduleType) {
        return axiosInstance.post(`${prefix}/updateSchedule`, schedule);
    },
    
    getSchedule(doctorNumber: number) {
        return axiosInstance.get(`${prefix}/getSchedule/${doctorNumber}`);
    },
};
