import TextInput from '../components/Infrastructure/Input/TextInput';
import Layout from '../layout';
import { FormProvider, useForm } from 'react-hook-form';
import React from 'react';
import Button from '../components/Infrastructure/Button';

export default function Home() {
  const defaultValues = {
    textValue: '',
    radioValue: '',
    checkboxValue: [],
    dateValue: new Date(),
    dropdownValue: '',
    sliderValue: 0,
  };
  const methods = useForm({ defaultValues: defaultValues });

  const { handleSubmit } = methods;

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <Layout>
      <div style={{ backgroundColor: '#fff', height: '400px', marginTop: '100px' }}>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(submitHandler)}>
            <TextInput name="username" labelText="username" labelClassName="" />
            <TextInput name="password" labelText="password" labelClassName="" />
            <Button className="test" type="submit" />
          </form>
        </FormProvider>
      </div>
    </Layout>
  );
}
