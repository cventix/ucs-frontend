import { useMutation } from 'react-query';
import { loginService } from '../../../services';

const useLoginMutation = () => {
  return useMutation(loginService);
};

export { useLoginMutation };
