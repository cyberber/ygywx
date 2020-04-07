import axios from 'axios'

export default function addCus(params) {
    return axios.post('/accountLogin/login', params)
}