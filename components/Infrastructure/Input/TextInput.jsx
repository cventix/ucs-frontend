import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FormControl, FormLabel } from 'react-bootstrap';

const TextInput = (props) => {
  const { name, labelClassName, labelText } = props;

  const { control } = useFormContext();

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value, name, ref, type } }) => (
          <>
            <FormLabel className={labelClassName}>{labelText}</FormLabel>
            <FormControl value={value} ref={ref} onChange={onChange} onBlur={onBlur} type={type} name={name} />
          </>
        )}
      />
    </div>
  );
};

export default TextInput;
