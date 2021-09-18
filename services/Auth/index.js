import axiosClient from '../request';

const loginService = async (body) => {
  const { data } = await axiosClient.post(`auth/login`, body);
  return data;
};

export { loginService };
