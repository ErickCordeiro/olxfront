import Cookies from 'js-cookie';
import qs from 'qs';
import axios from 'axios';

const BASE_URL = 'http://localhost:30202/api/v1'
const token = Cookies.get('token');

export const get = async (endpoint, payload = []) => {

    const res = await axios.get(`${BASE_URL + endpoint}?${qs.stringify(payload)}`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return [];
    });

    return res;
}

export const post = async (endpoint, payload) => {

    const body = JSON.stringify(payload);
    const res = await axios.post(BASE_URL + endpoint, body, {
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    }).then((response) => {
        return response;
    }).catch((error) => {
        return error;
    });

    return res;    
}