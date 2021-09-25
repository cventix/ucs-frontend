import axiosClient from '../request';

const loginService = async (body) => {
  const { data } = await axiosClient.post(`auth/login`, body);
  return data;
};

const registerService = async (body) => {
  const { data } = await axiosClient.post(`auth/register`, body);
  return data;
};

const forgotPassService = async (body) => {
  const data = await axiosClient.post(`/auth/forgot`, body);
  return data;
};

const resetPasswordService = async (body) => {
  const data = await axiosClient.post(`/auth/reset`, body);
  return data;
};

export { loginService, registerService, forgotPassService, resetPasswordService };
