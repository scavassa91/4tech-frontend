import axios from 'axios';

export const axios4tech = axios.create({
    baseURL: 'http://172.25.40.72:3000/',
    timeout: 10000
});

