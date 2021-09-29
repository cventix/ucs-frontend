import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import GeneralDialog from '../GeneralDialog';
import loginStyles from './login.module.scss';
import { useForgotPassMutation } from '../../../hooks/Query/Auth';
import TextInput from '../../Infrastructure/Input/TextInput';
import Button from '../../Infrastructure/Button';
import { Alert, Form } from 'react-bootstrap';

const ForgotPassword = ({ closeHandler }) => {
  const forgotPassMutation = useForgotPassMutation();
  const [isLoading, setIsLoading] = useState(false);
  const defaultValues = {
    email: '',
  };

  const [notification, setNotification] = useState({ show: false, variant: 'primary', content: '' });

  const schema = yup.object().shape({
    email: yup.string().email().required(),
  });

  const methods = useForm({ defaultValues: defaultValues, resolver: yupResolver(schema) });
  const { handleSubmit } = methods;

  const submitHandler = (body) => {
    if (body.email) {
      forgotPassMutation.mutateAsync(body);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    if (forgotPassMutation.isSuccess && !forgotPassMutation.isIdle) {
      setNotification({ show: true, variant: 'success', content: "Sent reset link to you're email" });
      console.log(forgotPassMutation);
      setTimeout(() => {
        onCloseNotif();
        setIsLoading(false);
        closeHandler(false);
      }, [3000]);
    }
  }, [forgotPassMutation.isSuccess]);

  useEffect(() => {
    if (forgotPassMutation.isError && !forgotPassMutation.isIdle) {
      setNotification({ show: true, variant: 'danger', content: "Email isn't exist" });
      setTimeout(() => {
        onCloseNotif();
      }, [5000]);
    }
  }, [forgotPassMutation.isError]);

  const onCloseNotif = () => {
    setNotification({
      ...notification,
      show: false,
    });
  };
  return (
    <div className={loginStyles['login-overlay']} style={{ opacity: 1, display: 'block' }}>
      <GeneralDialog closeHandler={closeHandler}>
        <div className={loginStyles['forgot-pass-container']}>
          <FormProvider {...methods}>
            <Form
              onSubmit={handleSubmit(submitHandler)}
              id="login"
              name="wf-form-Login-Form"
              data-name="Login Form"
              method="post"
              ms-login="true"
              className={loginStyles['ms-password-padding']}
            >
              <div className={loginStyles['ms-password-h1']} ms-lang="reset_your_password">
                Reset your password
              </div>
              <div className={loginStyles['ms-password-text']} ms-lang="reset_enter_email">
                Enter your email address, and we will send instructions to reset your password.
                <br />
              </div>
              {notification?.show && (
                <Alert className={loginStyles['show-notif']} variant={notification.variant}>
                  <button type="button" className="btn" onClick={onCloseNotif}>
                    <span aria-hidden="true">×</span>
                  </button>
                  {notification.content}
                </Alert>
              )}
              <TextInput
                type="email"
                id="email-2"
                inputClassName={loginStyles['ms-password-field']}
                labelClassName={loginStyles['ms-password-label']}
                labelText="Email address"
                maxLength={256}
                name="email"
                isRequired={true}
              />
              <Button type="submit" className={loginStyles['ms-password-button']}>
                {isLoading && (
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                )}
                Send Password Reset Email
              </Button>
            </Form>
          </FormProvider>
        </div>
      </GeneralDialog>
    </div>
  );
};

export default ForgotPassword;
