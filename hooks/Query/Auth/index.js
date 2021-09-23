import { useState } from 'react';
import { useMutation } from 'react-query';
import { loginService, registerService, forgotPassService, resetPasswordService } from '../../../services';

const useLoginMutation = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const loginAction = (formData) => {
    setLoading(true);
    loginService(formData)
      .then((response) => {
        setData(response.payload);
        setLoading(false);
        const token = response.payload.token;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(response.payload));
        window.location.reload();
      })
      .catch((err) => {
        setError(err?.response?.data);
        setLoading(false);
      });
  };

  return [{ data, loading, error }, loginAction];
};

const useRegisterMutation = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const registerAction = (formData) => {
    setLoading(true);
    registerService(formData)
      .then((response) => {
        setData(response.payload);
        setLoading(false);
      })
      .catch((err) => {
        setError(err?.response?.data);
        setLoading(false);
      });
  };

  return [{ data, loading, error }, registerAction];
};

const useForgotPassMutation = () => {
  return useMutation(forgotPassService);
};

const useResetPassMutation = () => {
  return useMutation(resetPasswordService);
};

export { useLoginMutation, useRegisterMutation, useForgotPassMutation, useResetPassMutation };
