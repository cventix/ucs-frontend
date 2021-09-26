import axiosClient from '../request';

const loginService = async (body) => {
  return axiosClient.post(`/auth/login`, body);
};

const registerService = async (body) => {
  return axiosClient.post(`/auth/register`, body);
};

const forgotPassService = async (body) => {
  return await axiosClient.post(`/auth/forgot`, body);
};

const resetPasswordService = async (body) => {
  return await axiosClient.post(`/auth/reset`, body);
};

export { loginService, registerService, forgotPassService, resetPasswordService };
