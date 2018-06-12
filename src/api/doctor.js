import { axiosInstance } from '../axiosInstance';

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
    }
};
