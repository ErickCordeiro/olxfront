import { post, get } from '../hooks/useApi.js';

const OlxApi = {
    signin: async (email, password) => {
        const json = await post(
            '/login',
            { email, password }
        );

        return json;
    }
};

export default () => OlxApi;