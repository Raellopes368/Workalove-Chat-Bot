import React, { useState } from 'react';
import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import ReactLoading from 'react-loading';
import './styles.css';

import yupErrorMessages from '../../utils/yupErrorMessages';
import messagesInformations from '../../utils/messagesInformations';
import api from '../../services/api';

import QuestionField from '../QuestionField';
import AnswerField from '../AnswerField';
import Modal from '../Modal';

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
  const [loadingApi, setLoadingApi] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [requisitionSuccess, setRequisitionSuccess] = useState(false);
  const [requisitionError, setRequisitionError] = useState(false);

  function handleSatisfaction(value) {
    setSelectedRating(value);
  }

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
    }, 400);
  }

  async function handleSubmit(event, values) {
    event.preventDefault();
    setLoadingApi(true);
    try {
      await api.post('/users', {
        ...values,
        satisfactionLevel: selectedRating || 1,
      });
      setRequisitionSuccess(true);
    } catch (err) {
      setRequisitionError(true);
    } finally {
      setLoadingApi(false);
    }
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
        <FormikForm
          className="formContainer"
          onSubmit={(e) => handleSubmit(e, values)}
        >
          {requisitionSuccess && (
            <Modal
              type="success"
              handleClose={() => setRequisitionSuccess(false)}
            />
          )}
          {requisitionError && (
            <Modal
              type="error"
              handleClose={() => setRequisitionError(false)}
            />
          )}
          {messagesInformations.map(
            (info) =>
              (realeaseds[info.dependent] || !info.dependent) && (
                <div className="fields" key={`${info.id}`}>
                  <QuestionField
                    text={
                      info.id === 1
                        ? info.message.replace(/%%name%%/, values.name)
                        : info.message
                    }
                  />
                  <AnswerField
                    name={info.field}
                    type={info.type}
                    values={values}
                    touched={touched}
                    isValid={isValid}
                    handleRelease={() => handleRelease(info.field, errors)}
                    errors={errors}
                    handleSatisfaction={(rating) => handleSatisfaction(rating)}
                    selected={selectedRating}
                    placeholder={info.placeholder}
                  />
                </div>
              )
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
          {realeaseds.email && (
            <button className="btnSubmit" type="submit">
              {loadingApi ? (
                <ReactLoading
                  type="spin"
                  color="rgb(62, 169, 231)"
                  height={25}
                  width={25}
                />
              ) : (
                'Salvar'
              )}
            </button>
          )}
        </FormikForm>
      )}
    </Formik>
  );
}

export default Form;
