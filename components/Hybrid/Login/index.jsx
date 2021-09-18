import React from 'react';
import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import loginStyles from './login.module.scss';
import GeneralDialog from '../GeneralDialog';
import Button from '../../Infrastructure/Button';
import TextInput from '../../Infrastructure/Input/TextInput';
import { Form } from 'react-bootstrap';
import { loginService } from '../../../services';

function Login({ closeHandler }) {
  const defaultValues = {
    email: '',
    password: '',
  };

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(20).required(),
  });

  const methods = useForm({ defaultValues: defaultValues, resolver: yupResolver(schema) });
  const { handleSubmit } = methods;

  const submitHandler = async (data) => {
    if (data.email && data.password) {
      const response = await loginService(data);
      if (response?.status === 'success') {
        const token = response.payload.token;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(response.payload));
        window.location.reload();
      }
    }
  };
  return (
    <div className={loginStyles['login-overlay']} style={{ opacity: 1, display: 'block' }}>
      <GeneralDialog closeHandler={closeHandler}>
        <div className={loginStyles['login-container']}>
          <div className={loginStyles['login-accent']} />
          <img src="images/clip.png" alt="login" className={loginStyles['login-image']} />
          <div className={loginStyles['login-form-block'] + ' w-form'}>
            <h1 className={loginStyles['login-head']}>Welcome back! Enter your email and password to continue.</h1>
            <div className={loginStyles['secondary-action']}>
              First time here?
              <Link href="#">
                <a data-w-id="5a111662-0fdc-3d44-d2fb-ac20165521d1" className={loginStyles['login-link']}>
                  Sign up for our free 30-day trial.
                </a>
              </Link>
            </div>
            <FormProvider {...methods}>
              <Form
                onSubmit={handleSubmit(submitHandler)}
                id="login"
                name="wf-form-Login-Form"
                data-name="Login Form"
                method="post"
                ms-login="true"
                className={loginStyles['memberstack-form']}
              >
                <TextInput
                  type="email"
                  id="email-2"
                  inputClassName={loginStyles['login-field']}
                  labelClassName={loginStyles['login-label-2']}
                  labelText="Email address"
                  maxLength={256}
                  name="email"
                  isRequired={true}
                />
                <TextInput
                  type="password"
                  id="password-2"
                  inputClassName={loginStyles['login-field']}
                  labelClassName={loginStyles['login-label-2']}
                  labelText="password"
                  hasExtraTag={true}
                  extraTag={() => (
                    <Link href="#">
                      <a ms-forgot="true" className={loginStyles['password-link']}>
                        Forgot your password?
                      </a>
                    </Link>
                  )}
                  maxLength={256}
                  name="password"
                  isRequired={true}
                />
                <Button type="submit" className={loginStyles['login-button-2']}>
                  Login Now
                </Button>
                <div className={loginStyles['terms-text']}>
                  By joining, you are agreeing to our{' '}
                  <a href="#" className={loginStyles['login-page-link']}>
                    Terms
                  </a>{' '}
                  and{' '}
                  <a href="#" className={loginStyles['login-page-link']}>
                    Privacy Policy
                  </a>
                </div>
              </Form>
            </FormProvider>

            <div className="hide w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="hide w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </GeneralDialog>
    </div>
  );
}

Login.propTypes = {};

export default Login;
