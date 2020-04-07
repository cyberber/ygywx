import axios from 'axios';

export default function login(params) {
    return axios.post('/accountLogin/login', params)
} 