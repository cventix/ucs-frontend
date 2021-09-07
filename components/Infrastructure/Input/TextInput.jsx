import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import { FormControl, FormLabel } from 'react-bootstrap';
import styles from './textInput.module.scss';

const TextInput = ({ name, id, inputClassName, labelClassName, labelText, type, maxLength, hasExtraTag, extraTag }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  console.log(errors);

  return (
    <div className={styles['field-wrapper']}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value, name, ref } }) => (
          <div>
            <FormLabel className={labelClassName} htmlFor={id}>
              {labelText}
              {hasExtraTag && extraTag()}
            </FormLabel>
            <FormControl
              id={id}
              value={value}
              ref={ref}
              onChange={onChange}
              onBlur={onBlur}
              type={type}
              name={name}
              className={`${styles['w-input']} ${inputClassName} ${errors?.[name]?.message && styles['input-error']}`}
              maxLength={maxLength}
            />
            {errors?.[name]?.message && <span className={styles['message-error']}>{errors?.[name].message}</span>}
          </div>
        )}
      />
    </div>
  );
};

TextInput.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  ref: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  maxLength: PropTypes.number,
  labelClassName: PropTypes.string,
  labelText: PropTypes.string,
  hasExtraTag: PropTypes.bool,
  extraTag: PropTypes.node,
};
TextInput.defaultProps = {
  id: '',
  value: '',
  ref: () => {},
  onChange: () => {},
  onBlur: () => {},
  type: 'text',
  name: 'input',
  className: '',
  maxLength: 50,
  labelClassName: '',
  labelText: 'input',
  hasExtraTag: false,
  extraTag: null,
};
export default TextInput;
