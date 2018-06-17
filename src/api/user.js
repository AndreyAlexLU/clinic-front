import { axiosInstance } from '../axiosInstance';

const prefix = '/user';

export const UserApi = {
    create(userData: User) {
        return axiosInstance.post(`${prefix}/create/`, userData)
    },
    
    login(userData) {
        return axiosInstance.post(`${prefix}/login/`, userData)
    },
    
    get(login) {
        return axiosInstance.get(`${prefix}/get/${login}`);
    },
    
    getByRole(roleId) {
        return axiosInstance.get(`${prefix}/getByRole/${roleId}`);
    }
};
