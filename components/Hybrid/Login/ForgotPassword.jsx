import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import GeneralDialog from '../GeneralDialog';
import loginStyles from './login.module.scss';
import { useForgotPassMutation } from '../../../hooks/Query/Auth';
import TextInput from '../../Infrastructure/Input/TextInput';
import Button from '../../Infrastructure/Button';
import { Form } from 'react-bootstrap';

const ForgotPassword = ({ closeHandler }) => {
  const forgotPassMutation = useForgotPassMutation();
  const defaultValues = {
    email: '',
  };

  const schema = yup.object().shape({
    email: yup.string().email().required(),
  });

  const methods = useForm({ defaultValues: defaultValues, resolver: yupResolver(schema) });
  const { handleSubmit } = methods;

  const submitHandler = (body) => {
    if (body.email) {
      forgotPassMutation.mutate(body);
      const { isSuccess } = forgotPassMutation;
      if (isSuccess) {
        console.log('success');
      } else console.log('failed');
    }
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
              <div className={loginStyles['ms-password-top-text']} ms-lang="reset_steps_1">
                Step 1 of 2
              </div>
              <div className={loginStyles['ms-password-h1']} ms-lang="reset_your_password">
                Reset your password
              </div>
              <div className={loginStyles['ms-password-text']} ms-lang="reset_enter_email">
                Enter your email address, and we will send instructions to reset your password.
                <br />
              </div>
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
