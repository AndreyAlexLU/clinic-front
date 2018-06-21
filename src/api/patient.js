import { axiosInstance } from '../axiosInstance';

const prefix = '/patient';

export const PatientApi = {
    makeAppointment(appointment) {
        return axiosInstance.post(`${prefix}/makeAppointment`, appointment);
    },
    
    savePatient(patient) {
        return axiosInstance.post(`${prefix}/savePatient`, patient);
    },
    
    getPatient(login) {
        return axiosInstance.get(`${prefix}/getPatient/${login}`);
    }
};
