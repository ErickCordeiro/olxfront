import { post, get } from '../hooks/useApi.js';

const OlxApi = {
    signin: async (email, password) => {
        const json = await post(
            '/login',
            { email, password }
        );

        return json.data;
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
        return json.data;
    },
    getCategories: async () => {
        const json = await get('/categories');
        return json.data.categories;
    },
    getAds: async (options) => {
        const json = await get(
            '/ads',
            options
        );
        return json.data.ads;
    },
    getAdUnique: async (id) => {
        const json = await get(`/ad-info/${id}`);
        return json.data;
    },
    addAd: async (title, category, description, price, priceNeg, images) => {
        const json = await post(
            '/ad/store',
            {
                title,
                category,
                description, 
                price,
                priceneg: priceNeg,
                images
            },
        );
        return json.data;
    }
};

export default () => OlxApi;