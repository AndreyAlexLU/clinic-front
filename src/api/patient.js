import { axiosInstance } from '../axiosInstance';

const prefix = '/patient';

export const PatientApi = {
    makeAppointment(appointment) {
        return axiosInstance.post(`${prefix}/makeAppointment`, appointment);
    },
    
    cancelAppointment(appointmentId) {
        return axiosInstance.get(`${prefix}/cancelAppointment/${appointmentId}`);
    },
    
    getAppointments(patientId) {
        return axiosInstance.get(`${prefix}/getAppointments/${patientId}`);
    },
    
    savePatient(patient) {
        return axiosInstance.post(`${prefix}/save`, patient);
    },
    
    getPatient(login) {
        return axiosInstance.get(`${prefix}/getPatient/${login}`);
    },
    
    get() {
        return axiosInstance.get(`${prefix}/get`);
    }
};
