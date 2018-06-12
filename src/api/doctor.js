import { axiosInstance } from '../axiosInstance';

const prefix = '/api/doctor';

export const DoctorsApi = {
    get() {
        return axiosInstance.get(`${prefix}/get`)
    },
    
    getBySpec(spec) {
        return axiosInstance.get(`${prefix}/getBySpec/${spec}`)
    }
};
