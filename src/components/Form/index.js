import React, { useState, useRef } from 'react';
import { Formik, Form as FormikForm } from 'formik';
import ReactLoading from 'react-loading';
import './styles.css';

import messagesInformations from '../../utils/messagesInformations';
import api from '../../services/api';

import yupSchema from '../../utils/yupSchema';

import QuestionField from '../QuestionField';
import AnswerField from '../AnswerField';
import Modal from '../Modal';

function Form() {
  const [realeaseds, setReleaseds] = useState({});
  const [loading, setLoading] = useState(false);
  const [loadingApi, setLoadingApi] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [requisitionSuccess, setRequisitionSuccess] = useState(false);
  const [requisitionError, setRequisitionError] = useState(false);
  const containerRef = useRef(null);
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
      if (containerRef.current) {
        containerRef.current.scrollTo({
          top: containerRef.current.scrollHeight,
          behavior: 'smooth',
        });
      }
      setLoading(false);
    }, 400);
  }

  async function handleSubmit(values, actions) {
    setLoadingApi(true);
    try {
      await api.post('/users', {
        ...values,
        satisfactionLevel: selectedRating || 1,
      });
      setRequisitionSuccess(true);
      actions.resetForm();
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
      onSubmit={(values, actions) => handleSubmit(values, actions)}
    >
      {({ values, touched, isValid, errors, setErrors }) => (
        <FormikForm className="formContainer" ref={containerRef}>
          {requisitionSuccess && (
            <Modal
              type="success"
              handleClose={() => {
                setRequisitionSuccess(false);
                setReleaseds({});
              }}
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
                    setErrors={setErrors}
                    realeaseds={realeaseds}
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
