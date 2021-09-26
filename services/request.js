import axios from 'axios';

const axiosClient = axios.create({
  baseURL: `https://core.pte.irantoptal.com/api/v1`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let res = error.response;
    if (res.status === 401 || res.status === 403) {
      console.log('unauthorized');
    }
    if (error.response.status === 404) {
      console.log(`not found`);
    }
    return error;
  },
);

export default axiosClient;
