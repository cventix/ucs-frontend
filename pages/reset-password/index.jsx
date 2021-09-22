import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Layout from '../../layout';
import style from './resetPassword.module.scss';
import TextInput from '../../components/Infrastructure/Input/TextInput';
import Button from '../../components/Infrastructure/Button';
import { Form } from 'react-bootstrap';
import { useResetPassMutation } from '../../hooks/Query';
import { useRouter } from 'next/router';

const ResetPassword = () => {
  const router = useRouter();
  const { email, token } = router?.query;
  const resetPassMutation = useResetPassMutation();
  const defaultValues = {
    newPassword: '',
    confirmPassword: '',
  };

  const schema = yup.object().shape({
    newPassword: yup.string().min(4).max(20).required(),
    confirmPassword: yup.string().oneOf([yup.ref('newPassword'), null], 'Passwords must match'),
  });

  const methods = useForm({ defaultValues: defaultValues, resolver: yupResolver(schema) });
  const { handleSubmit } = methods;

  const submitHandler = (body) => {
    console.log(body);
    if (body.newPassword && body.confirmPassword) {
      const newBody = {
        email: email,
        verification_code: token,
        password: body.newPassword,
      };
      resetPassMutation.mutate(newBody);
      const { isSuccess } = resetPassMutation;
      if (isSuccess) {
        console.log('success');
      } else console.log('failed');
    }
  };
  return (
    <>
      <Layout>
        <div className={style['reset-pass-container']}>
          <FormProvider {...methods}>
            <Form
              onSubmit={handleSubmit(submitHandler)}
              id="login"
              name="wf-form-Login-Form"
              data-name="Login Form"
              method="post"
              ms-login="true"
              className={style['reset-password-form']}
            >
              <div className={style['reset-password-text']} ms-lang="reset_enter_email">
                Please create and confirm new password.
                <br />
              </div>
              <TextInput
                type="email"
                id="email-2"
                inputClassName={style['reset-password-field']}
                labelClassName={style['reset-password-label']}
                labelText="Email address"
                maxLength={256}
                name="email"
                defaultValue={email}
                readOnly={true}
                isRequired={true}
              />
              <TextInput
                type="password"
                id="newPassword"
                inputClassName={style['reset-password-field']}
                labelClassName={style['reset-password-label']}
                labelText="New Password"
                maxLength={256}
                name="newPassword"
                isRequired={true}
              />
              <TextInput
                type="password"
                id="confirmPasword"
                inputClassName={style['reset-password-field']}
                labelClassName={style['reset-password-label']}
                labelText="Confirm Password"
                maxLength={256}
                name="confirmPassword"
                isRequired={true}
              />
              <Button type="submit" className={style['reset-password-button']}>
                Reset Password
              </Button>
            </Form>
          </FormProvider>
        </div>
      </Layout>
    </>
  );
};

export default ResetPassword;
