import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { IoSend } from 'react-icons/io5';
import PropTypes from 'prop-types';
import SatisfactionRating from '../SatisfactionRating';
import './styles.css';

function AnswerField({
  name,
  type,
  handleRelease,
  errors,
  touched,
  handleSatisfaction,
  selected,
}) {
  function keyPress(key) {
    if (key === 'Enter') handleRelease();
  }

  function getBorderColor() {
    return errors[name] && touched[name] ? '#e04a3d' : 'rgb(62, 169, 231)';
  }

  return (
    <div className="answerContainer">
      {type === 'satisfaction' ? (
        <SatisfactionRating
          handleSelected={handleSatisfaction}
          selected={selected}
        />
      ) : (
        <>
          <div className="row">
            <Field
              name={name}
              type={type}
              autoFocus
              style={{
                borderWidth: 1,
                borderColor: getBorderColor(),
              }}
              autoComplete="off"
              onKeyPress={(e) => keyPress(e.key)}
            />
            <IoSend
              size={30}
              color="rgb(62, 169, 231)"
              onClick={() => handleRelease()}
            />
          </div>
          <ErrorMessage className="errorMessage" component="span" name={name} />
        </>
      )}
    </div>
  );
}

AnswerField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  touched: PropTypes.shape({}).isRequired,
  handleRelease: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
  handleSatisfaction: PropTypes.func,
  selected: PropTypes.number,
};

AnswerField.defaultProps = {
  handleSatisfaction: () => {},
  selected: 0,
};

export default AnswerField;
