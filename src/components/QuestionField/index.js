import React from 'react';
import PropTypes from 'prop-types';
import { FaSmileBeam } from 'react-icons/fa';
import './styles.css';

function QuestionField({ text }) {
  return (
    <div className="questionContainer">
      <div className="icon">
        <FaSmileBeam color="#fff" size={35} />
      </div>
      <span className="textQuestion">{text}</span>
    </div>
  );
}

QuestionField.propTypes = {
  text: PropTypes.string.isRequired,
};

export default QuestionField;
