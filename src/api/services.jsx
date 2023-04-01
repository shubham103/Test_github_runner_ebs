import axios from "axios";
const BASE_URL = 'https://api-preksha-dev.cyclic.app/api';
const headers = {
    "Content-Type": "application/json",
}
export const get = (url, params) => {
    return axios.get(BASE_URL + url, { params });
};
export const post = (url, data) => {
    return axios.post(BASE_URL + url, data);
};