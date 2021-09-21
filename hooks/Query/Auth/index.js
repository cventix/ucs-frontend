import { useMutation } from 'react-query';
import { loginService, registerService } from '../../../services';

const useLoginMutation = () => {
  return useMutation(loginService);
};

const useRegisterMutation = () => {
  return useMutation(registerService);
};

export { useLoginMutation, useRegisterMutation };
