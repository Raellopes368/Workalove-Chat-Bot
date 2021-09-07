import React from 'react';
import { Formik, Form as FormikForm } from 'formik';
import './styles.css';

import QuestionField from '../QuestionField';
import AnswerField from '../AnswerField';

function Form() {
  return (
    <Formik
      initialValues={{
        name: '',
      }}
    >
      {() => (
        <FormikForm className="formContainer">
          <QuestionField text="Olá, eu sou o Chatnilson, tudo bem? Para começarmos, preciso saber seu nome." />
          <AnswerField name="name" type="text" />
        </FormikForm>
      )}
    </Formik>
  );
}

export default Form;
