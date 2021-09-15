import React from 'react';
import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import loginStyles from './login.module.scss';
import GeneralDialog from '../GeneralDialog';
import Button from '../../Infrastructure/Button';
import TextInput from '../../Infrastructure/Input/TextInput';
import { Form, Row } from 'react-bootstrap';

const Register = ({ closeHandler }) => {
  const defaultValues = {
    email: '',
    password: '',
  };

  const schema = yup.object().shape({
    firstName: yup.string().min(3).required(),
    lastName: yup.string().min(3).required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(20).required(),
  });

  const methods = useForm({ defaultValues: defaultValues, resolver: yupResolver(schema) });
  const { handleSubmit } = methods;
  const submitHandler = (data) => {
    console.log('registerHandler', data);
  };
  return (
    <div className={loginStyles['login-overlay']} style={{ opacity: 1, display: 'block' }}>
      <GeneralDialog closeHandler={closeHandler}>
        <div className={loginStyles['login-container']}>
          <div className={loginStyles['login-accent']} />
          <img src="images/clip.png" alt="login" className={loginStyles['login-image']} />
          <div
            className={`${loginStyles['signup-form-block']} w-form`}
            style={{
              display: 'block',
              opacity: 1,
              transform:
                'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            <h1 className={loginStyles['login-head']}>
              Start your 30-day free trial by entering your information below
            </h1>
            <FormProvider {...methods}>
              <Form
                id="sign-up"
                name="wf-form-Sign-up-Form"
                data-name="Sign up Form"
                method="post"
                ms-signup="true"
                onSubmit={handleSubmit(submitHandler)}
                className={loginStyles['memberstack-form']}
              >
                <Row>
                  <TextInput
                    type="text"
                    name="firstName"
                    id="firstName"
                    inputClassName={loginStyles['login-field']}
                    labelClassName={loginStyles['login-label-2']}
                    labelText="First name"
                    colXs={12}
                    colXl={6}
                    maxLength={256}
                    isRequired={true}
                  />
                  <TextInput
                    type="text"
                    name="lastName"
                    id="lastName"
                    inputClassName={loginStyles['login-field']}
                    labelClassName={loginStyles['login-label-2']}
                    labelText="Last name"
                    colXs={12}
                    colXl={6}
                    maxLength={256}
                    isRequired={true}
                  />
                </Row>
                <Row>
                  <TextInput
                    type="email"
                    name="email"
                    id="email"
                    inputClassName={loginStyles['login-field']}
                    labelClassName={loginStyles['login-label-2']}
                    labelText="Email address"
                    maxLength={256}
                    isRequired={true}
                  />
                </Row>
                <Row>
                  <TextInput
                    type="password"
                    name="password"
                    id="password"
                    inputClassName={loginStyles['login-field']}
                    labelClassName={loginStyles['login-label-2']}
                    labelText="Password"
                    maxLength={256}
                    isRequired={true}
                  />
                </Row>

                <Button type="submit" className={loginStyles['login-button-2']}>
                  Complete Sign up
                </Button>
                <div className={loginStyles['terms-text']}>
                  By joining, you are agreeing to our
                  <Link href="#">
                    <a className={loginStyles['login-page-link']}>Terms</a>
                  </Link>
                  and
                  <Link href="#">
                    <a className={loginStyles['login-page-link']}>Privacy Policy</a>
                  </Link>
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
};

export default Register;
