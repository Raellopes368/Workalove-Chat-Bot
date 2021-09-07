import React from 'react';
import { Formik, Form as FormikForm } from 'formik';
import './styles.css';

import FieldQuestion from '../FieldQuestion';
import FieldAnswer from '../FieldAnswer';

function Form() {
  return (
    <Formik
      initialValues={{
        name: '',
      }}
    >
      {() => (
        <FormikForm className="formContainer">
          <FieldQuestion text="Olá, eu sou o Chatnilson, tudo bem? Para começarmos, preciso saber seu nome." />
          <FieldAnswer name="name" type="text" />
        </FormikForm>
      )}
    </Formik>
  );
}

export default Form;
