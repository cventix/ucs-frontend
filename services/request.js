import axios from 'axios';
// import toast from 'react-hot-toast';

const axiosClient = axios.create({
  baseURL: `https://core.pte.irantoptal.com/api/v1`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

let toastId;

axiosClient.interceptors.request.use(
  (request) => {
    // toastId = toast.loading('Loading...');
    return request;
  },
  (error) => {
    // toast.error(error.message, { id: toastId });
  },
);

axiosClient.interceptors.response.use(
  (response) => {
    // toast.success('Request was Successful', { id: toastId });
    return response;
  },
  (error) => {
    let res = error.response;
    if (res.status === 401 || res.status === 403) {
      console.error('Unauthenticated');
      // toast.error('Unauthenticated', { id: toastId });
    } else {
      // toast.error(error.message, { id: toastId });
    }
    if (error.response.status === 404) {
      console.log(`not found`);
    }
    return error;
  },
);

export default axiosClient;
