import { post, get } from '../hooks/useApi.js';

const OlxApi = {
    signin: async (email, password) => {
        const json = await post(
            '/login',
            { email, password }
        );

        return json;
    },
    signup: async (name, state, email, password) => {
        const json = await post(
            '/register',
            { name, state, email, password }
        )

        return json;
    },
    getStates: async () => {
        const json = await get('/states');
        return json;
    },
    getCategories: async () => {
        const json = await get('/categories');
        return json.categories;
    },
    getAds: async (options) => {
        const json = await get(
            '/ads',
            options
        );
        return json.ads;
    }
};

export default () => OlxApi;