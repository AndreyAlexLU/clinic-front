import * as axios from 'axios';
import { getCookie } from './utils/getCookie';

const axiosInstancePrivate = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 5000,
});

export const axiosInstance = new Proxy(axiosInstancePrivate, {
    get(target, prop) {
        if (prop === 'get' || prop === 'post') {
            const token = getCookie('clinic_token');
            axiosInstancePrivate.defaults.headers.common['x-access-token'] = token;
        }
        
        return target[prop];
    }
});
