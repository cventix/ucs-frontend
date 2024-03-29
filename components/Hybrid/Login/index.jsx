import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import loginStyles from './login.module.scss';
import GeneralDialog from '../GeneralDialog';
import Button from '../../Infrastructure/Button';
import TextInput from '../../Infrastructure/Input/TextInput';
import { Form } from 'react-bootstrap';
import ForgotPassword from './ForgotPassword';
import { useLogin } from '../../../hooks';

function Login({ closeHandler }) {
  const [isOPenForgotPass, setIsOpenForgotPass] = useState(false);
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
  const { login, isLoading, isError, isSuccess } = useLogin();

  const submitHandler = async (body) => {
    if (body.email && body.password) {
      await login(body);
    }
  };

  return (
    <Fragment>
      <div className={loginStyles['login-overlay']} style={{ opacity: 1, display: 'block' }}>
        <GeneralDialog closeHandler={() => closeHandler()}>
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
                        <a
                          ms-forgot="true"
                          role="button"
                          tabIndex={0}
                          className={loginStyles['password-link']}
                          onClick={() => {
                            // closeHandler(false);
                            setIsOpenForgotPass(true);
                          }}
                        >
                          Forgot your password?
                        </a>
                      </Link>
                    )}
                    maxLength={256}
                    name="password"
                    isRequired={true}
                  />
                  <Button type="submit" className={loginStyles['login-button-2']} disabled={isLoading}>
                    {!isLoading ? 'Login Now' : 'Loading...'}
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

              {isSuccess && (
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
              )}
              {isError && (
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              )}
            </div>
          </div>
        </GeneralDialog>
      </div>
      {isOPenForgotPass && <ForgotPassword closeHandler={() => setIsOpenForgotPass(false)} />}
    </Fragment>
  );
}

Login.propTypes = {};

export default Login;
