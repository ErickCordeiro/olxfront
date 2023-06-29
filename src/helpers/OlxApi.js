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
    },
    getAdUnique: async (id) => {
        const json = await get(`/ad-info/${id}`);
        return json;
    },
    addAd: async (title, category, description, price, priceNeg, images) => {
        const json = await post(
            '/ad/store',
            {title: title, category: category, description: description, price: price, priceneg: priceNeg, images},
        );
        return json;
    }
};

export default () => OlxApi;