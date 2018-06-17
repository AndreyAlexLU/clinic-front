import { axiosInstance } from '../axiosInstance';
import type { DoctorType } from '../models/Doctor';

const prefix = '/doctor';

export const DoctorsApi = {
    get() {
        return axiosInstance.get(`${prefix}/get`);
    },
    
    getSpecs() {
        return axiosInstance.get(`${prefix}/getSpecs`);
    },
    
    getBySpec(spec) {
        return axiosInstance.get(`${prefix}/getBySpec/${spec}`);
    },
    
    saveDoctor(doctor: DoctorType) {
        return axiosInstance.post(`${prefix}/save`, doctor);
    }
};
