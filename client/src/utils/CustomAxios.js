import axios from 'axios';

const CustomAxios = axios.create({});
CustomAxios.interceptors.request.use(
  (req) => {
    req.headers['x-access-token'] = localStorage.getItem('access_token');
    return req;
  },
  (err) => {
    return Promise.reject(err);
  },
);

CustomAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    const status = err.response ? err.response.status : null;
    if (status === 401) {
      localStorage.removeItem('access_token');
    }
    return Promise.resolve(err);
  },
);

export default CustomAxios;
