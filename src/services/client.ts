import axios from 'axios';

const defaultOptions = {
    baseURL:'http://192.168.0.108:3333'
}

export const client = axios.create(defaultOptions);

const token = '';
const defaultAuthOptions = {
    baseUrl:'http://192.168.0.108:3333',
    headers:{
        'Content-Type':'aplication/json',
        'Authorization':token
    }
}

export const authClient = axios.create(defaultAuthOptions);
