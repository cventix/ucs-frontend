import { useMutation } from 'react-query';
import { loginService, registerService, forgotPassService, resetPasswordService } from '../../../services';

const useLoginMutation = () => {
  return useMutation(loginService);
};

const useRegisterMutation = () => {
  return useMutation(registerService);
};

const useForgotPassMutation = () => {
  return useMutation(forgotPassService);
};

const useResetPassMutation = () => {
  return useMutation(resetPasswordService);
};

export { useLoginMutation, useRegisterMutation, useForgotPassMutation, useResetPassMutation };
