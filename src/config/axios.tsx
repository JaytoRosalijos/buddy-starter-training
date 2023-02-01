import axios from 'axios';
import { storageKeys } from '../constants/storage-keys';

const httpAxiosAdapter = axios.create();

httpAxiosAdapter.interceptors.request.use(async config => {
    const accessToken = JSON.parse(localStorage.getItem(storageKeys.AUTH) as string).accessToken;
    if (accessToken)
        config.headers.Authorization = `JWT ${accessToken}`;
    return config;
});

export { httpAxiosAdapter };