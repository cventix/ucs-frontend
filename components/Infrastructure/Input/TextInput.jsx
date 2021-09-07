import React from 'react';
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

export default TextInput;
