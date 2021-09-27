import { useMutation } from 'react-query';
import { toast } from 'react-hot-toast';
import { loginService, registerService, forgotPassService, resetPasswordService } from '../../../services';

export const useLogin = () => {
  const { mutateAsync, isLoading, isError, isSuccess } = useMutation((payload) => loginService(payload));

  const login = async (payload) => {
    let toastId;
    try {
      toastId = toast.loading('Loading...');
      const { data } = await mutateAsync(payload);
      if (!data) throw new Error('Unauthenticated');

      // Set user data
      const token = data.payload.token;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(data.payload));
      toast.success('Logged in successfully', { id: toastId });

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error(error.message, { id: toastId });
    }
  };

  return { login, isLoading, isError, isSuccess };
};

export const useRegister = () => {
  const { mutateAsync, isLoading, isError, isSuccess } = useMutation((payload) => registerService(payload));

  const register = async (payload) => {
    let toastId;
    try {
      toastId = toast.loading('Loading...');
      const { data } = await mutateAsync(payload);
      if (!data) throw new Error('Register was unsuccessful');

      // Set data
      const token = data.payload.token;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(data.payload));
      toast.success('Registered successfully', { id: toastId });

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error(error.message, { id: toastId });
    }
  };

  return { register, isLoading, isError, isSuccess };
};

const useForgotPassMutation = () => {
  return useMutation(forgotPassService);
};

const useResetPassMutation = () => {
  return useMutation(resetPasswordService);
};

export { useForgotPassMutation, useResetPassMutation };
