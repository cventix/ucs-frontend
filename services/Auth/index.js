import axiosClient from '../request';

const loginService = async (body) => {
  const { data } = await axiosClient.post(`auth/login`, body);
  return data;
};

const registerService = async (body) => {
  const { data } = await axiosClient.post(`auth/register`, body);
  return data;
};

export { loginService, registerService };
