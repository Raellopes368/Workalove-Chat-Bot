import React, { useState } from 'react';
import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import ReactLoading from 'react-loading';
import './styles.css';
import yupErrorMessages from '../../utils/yupErrorMessages';

import QuestionField from '../QuestionField';
import AnswerField from '../AnswerField';

function Form() {
  const { emptyField, shortField, fieldFormatEmail, fieldString } =
    yupErrorMessages;
  const yupSchema = Yup.object().shape({
    name: Yup.string(fieldString).min(2, 'Muito curto').required(emptyField),
    uf: Yup.string(fieldString).when('name', (name, field) =>
      name ? field.required(emptyField) : field
    ),
    city: Yup.string(fieldString)
      .min(2, shortField)
      .when('uf', (uf, field) => (uf ? field.required(emptyField) : field)),
    birth: Yup.date(emptyField).when('city', (city, field) =>
      city ? field.required(emptyField) : field
    ),
    email: Yup.string()
      .email(fieldFormatEmail)
      .when('birth', (birth, field) =>
        birth ? field.required(emptyField) : field
      ),
  });

  const [realeaseds, setReleaseds] = useState({});
  const [loading, setLoading] = useState(false);

  function handleRelease(name, errors) {
    if (errors[name]) {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setReleaseds({
        ...realeaseds,
        [name]: true,
      });
      setLoading(false);
    }, 1000);
  }

  return (
    <Formik
      initialValues={{
        name: '',
        uf: '',
        city: '',
        birth: '',
        email: '',
      }}
      validationSchema={yupSchema}
    >
      {({ values, touched, isValid, errors }) => (
        <FormikForm className="formContainer">
          <div className="fields">
            <QuestionField text="Olá, eu sou o Chatnilson, tudo bem? Para começarmos, preciso saber seu nome." />
            <AnswerField
              name="name"
              type="text"
              values={values}
              touched={touched}
              isValid={isValid}
              handleRelease={() => handleRelease('name', errors)}
              errors={errors}
            />
          </div>
          {realeaseds.name && (
            <div className="fields">
              <QuestionField
                text={`Que satisfação, ${values.name}. Agora que sei seu nome, qual o estado que você mora?`}
              />
              <AnswerField
                name="uf"
                type="text"
                values={values}
                touched={touched}
                isValid={isValid}
                handleRelease={() => handleRelease('uf', errors)}
                errors={errors}
              />
            </div>
          )}
          {realeaseds.uf && (
            <div className="fields">
              <QuestionField text="E a sua cidade." />
              <AnswerField
                name="city"
                type="text"
                values={values}
                touched={touched}
                isValid={isValid}
                handleRelease={() => handleRelease('city', errors)}
                errors={errors}
              />
            </div>
          )}
          {realeaseds.city && (
            <div className="fields">
              <QuestionField text="Legal, agora que sabemos sua cidade e estado. Quando foi que você nasceu?" />
              <AnswerField
                name="birth"
                type="date"
                values={values}
                touched={touched}
                isValid={isValid}
                handleRelease={() => handleRelease('birty', errors)}
                errors={errors}
              />
            </div>
          )}
          {realeaseds.birth && (
            <div className="fields">
              <QuestionField text="Agora me fala teu e-mail, por gentileza." />
              <AnswerField
                name="email"
                type="email"
                values={values}
                touched={touched}
                isValid={isValid}
                handleRelease={() => handleRelease('email', errors)}
                errors={errors}
              />
            </div>
          )}
          {loading && (
            <div className="loading">
              <ReactLoading
                type="bubbles"
                color="#1c1b1b"
                height={45}
                width={45}
              />
            </div>
          )}
        </FormikForm>
      )}
    </Formik>
  );
}

export default Form;
