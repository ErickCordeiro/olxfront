import Cookies from 'js-cookie';
import qs from 'qs';

const BASE_URL = 'http://localhost:30202/api/v1'
const token = Cookies.get('token');

export const get = async (endpoint, payload = []) => {
    const res = await fetch(`${BASE_URL + endpoint}?${qs.stringify(payload)}`);

    const json = await res.json();

    if(json.notallowed) {
        window.location.href = '/signin';
        return;
    }

    return json;
}

export const post = async (endpoint, payload) => {
    const res = await fetch(BASE_URL + endpoint, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
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