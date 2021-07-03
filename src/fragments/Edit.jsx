import React from 'react';
import * as Yup from 'yup';
import Button from '../components/Button';
import Form from '../components/Form';
import Input from '../components/Input';

export default function edit() {
  let validator = Yup.object().shape({
    id: Yup.string().required().label('Book ID'),
    title: Yup.string().required().label('Book Title'),
    number: Yup.number().required().label('Number of Books'),
  });

  return (
    <Form
      initialValues={{}}
      validationSchema={validator}
      onSubmit={values => {
        // dispatch(signIn(values))
      }}
    >
      <Input name='id' placeholder='Book ID' />
      <Input name='title' placeholder='Book Title' />
      <Input name='number' placeholder='Number Available' />
      {/* {state.err && (
      <p className="alert alert-danger">{state.err.message}</p>
    )} */}
      <Button style={{ alignSelf: 'baseline' }} classExtra='mt-2' submit>
        Update Record
      </Button>
    </Form>
  );
}
