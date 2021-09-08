import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Form } from 'react-bootstrap';
import TextInput from '../Infrastructure/Input/TextInput';
import Button from '../Infrastructure/Button';
import style from './ContactUs.module.scss';

const ContactUs = ({ title, description }) => {
  const defaultValues = {
    name: '',
    email: '',
    message: '',
  };

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().required(),
    message: yup.string().required(),
  });

  const methods = useForm({ defaultValues: defaultValues, resolver: yupResolver(schema) });
  const { handleSubmit } = methods;

  const submitHandler = (data) => {
    console.log('loginHandler', data);
  };
  return (
    <Fragment>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <h2 className={style.Title}>{title}</h2>
          <p className={style.Description}>{description}</p>
        </div>
        <div className="col-lh-8 col-md-8 col-sm-12">
          <FormProvider {...methods}>
            <Form onSubmit={handleSubmit(submitHandler)}>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <TextInput
                    id="name"
                    name="name"
                    type="text"
                    inputClassName={style.Input}
                    labelClassName={style.InputLabel}
                    labelText="Name*"
                    isRequired={true}
                    className={style.Input}
                    placeholder="Your name"
                  />
                </div>
                <div className="col-md-6 col-sm-12">
                  <TextInput
                    type="email"
                    id="email"
                    inputClassName={style.Input}
                    labelClassName={style.InputLabel}
                    labelText="Email Address*"
                    maxLength={256}
                    name="email"
                    isRequired={true}
                    placeholder="Your email address"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 mt-3">
                  <label htmlFor="message" className={style.InputLabel}>
                    Enquiry
                  </label>
                  <textarea id="message" name="message" className={style.Textarea} placeholder="Your message" />
                </div>
              </div>
              <div className="row align-items-center justify-content-end">
                <div className="col-12 d-flex justify-content-end mt-3">
                  <Button
                    onClick={handleSubmit(submitHandler)}
                    type="submit"
                    innerText="Submit"
                    className={style.SubmitButton}
                  />
                </div>
              </div>
            </Form>
          </FormProvider>
        </div>
      </div>
    </Fragment>
  );
};

ContactUs.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

ContactUs.defaultProps = {
  title: 'Contact Us',
  description:
    "If you want to be part of the conversation, please fill in your contact details and we'll get back to you.",
};

export default ContactUs;
