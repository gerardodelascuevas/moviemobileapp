import { AxiosAdapter } from "./axios.adapter";

export const movieDbFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie', 
    params: {
        api_key: '1c5d6531b7decca2790e5fa4d061d7bd', 
        language: 'es',
    }
})