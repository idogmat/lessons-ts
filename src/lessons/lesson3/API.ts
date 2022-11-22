import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = 'f8903326';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`/?t=${title}&apikey=${key}`)
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get(`/?type=${type}&s=${title}&apikey=${key}`)
    }
};


export default API;
