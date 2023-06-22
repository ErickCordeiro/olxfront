import Cookies from 'js-cookie';
import qs from 'qs';

const BASE_URL = 'http://localhost:30202/api/v1'

export const get = async (endpoint, payload = []) => {
    if(payload.token) {
        let token = Cookies.get('token');

        if(token){
            payload.token = token;
        }
    }

    const res = await fetch(`${BASE_URL + endpoint}?${qs.stringify(payload)}`);

    const json = await res.json();

    if(json.notallowed) {
        window.location.href = '/signin';
        return;
    }

    return json;
}

export const post = async (endpoint, payload) => {
    if(payload.token) {
        let token = Cookies.get('token');

        if(token){
            payload.token = token;
        }
    }

    const res = await fetch(BASE_URL + endpoint, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    const json = await res.json();

    if(json.notallowed) {
        window.location.href = '/signin';
        return;
    }

    return json;
}