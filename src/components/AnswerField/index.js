import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { IoSend } from 'react-icons/io5';
import PropTypes from 'prop-types';
import SatisfactionRating from '../SatisfactionRating';
import yupSchema from '../../utils/yupSchema';
import './styles.css';

function AnswerField({
  name,
  type,
  handleRelease,
  errors,
  touched,
  handleSatisfaction,
  selected,
  placeholder,
  values,
  realeaseds,
}) {
  async function confirmYupSchema() {
    try {
      await yupSchema.validate({ [name]: values[name] });
      return true;
    } catch (error) {
      const { path } = error;
      if (path === name) return false;
      return true;
    }
  }
  async function handleConfirm() {
    const hasCorrect = await confirmYupSchema();
    if (!hasCorrect) return;
    handleRelease();
  }
  function keyPress(event) {
    if (event.key === 'Enter') {
      handleConfirm();
    }
  }

  function blockClickIfReleased() {
    if (realeaseds[name]) {
      return;
    }
    handleConfirm();
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
              placeholder={placeholder}
              className={realeaseds[name] ? 'disable' : ''}
              style={{
                borderWidth: 1,
                borderColor: getBorderColor(),
              }}
              autoComplete="off"
              onKeyPress={(e) => keyPress(e)}
              autoFocus
              readOnly={!!realeaseds[name]}
            />
            <IoSend
              size={30}
              color="rgb(62, 169, 231)"
              onClick={() => blockClickIfReleased()}
              className={realeaseds[name] ? 'disableBtn' : ''}
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
  placeholder: PropTypes.string,
  values: PropTypes.shape({}).isRequired,
  realeaseds: PropTypes.shape({}).isRequired,
};

AnswerField.defaultProps = {
  handleSatisfaction: () => {},
  selected: 0,
  placeholder: '',
};

export default AnswerField;
