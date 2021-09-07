import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { IoSend } from 'react-icons/io5';
import PropTypes from 'prop-types';
import './styles.css';

function AnswerField({ name, type }) {
  return (
    <div className="answerContainer">
      <div className="row">
        <Field name={name} type={type} />
        <IoSend size={30} color="rgb(62, 169, 231)" />
      </div>
      <ErrorMessage className="errorMessage" component="span" name={name} />
    </div>
  );
}

AnswerField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default AnswerField;
