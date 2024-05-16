import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = (query) => {
    return axios.get(`${API_URL}/character`, { params: { name: query } });
};

export const getCharacterById = (id) => {
    return axios.get(`${API_URL}/character/${id}`);
};

export const getEpisodes = () => {
    return axios.get(`${API_URL}/episode`);
};
