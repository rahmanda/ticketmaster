import axios from 'axios';

const API_DOMAIN = 'https://app.ticketmaster.com';
const API_KEY = 'OxrPhnJA6HFLlgux2rxlAGQoAm1BIKo5';

function getEndpoint(path) {
  return `${API_DOMAIN}${path}`;
}

function get(path, params) {
  if (typeof params != 'object' || params === null) {
    params = {};
  }
  params = Object.assign(params, {
    apikey: API_KEY,
  });
  return axios.get(getEndpoint(path), { params });
}

export default {
  get,
};
