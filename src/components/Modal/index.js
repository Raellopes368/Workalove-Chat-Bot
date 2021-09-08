import React from 'react';
import PropTypes from 'prop-types';
import { BsCheckCircle } from 'react-icons/bs';
import { BiErrorCircle } from 'react-icons/bi';
import './styles.css';

function Modal({ type, handleClose }) {
  return (
    <div className="modalContainer">
      <div className="modalContent">
        {type === 'error' ? (
          <BiErrorCircle size={45} color="#e04a3d" />
        ) : (
          <BsCheckCircle size={45} color="#65eb38" />
        )}
        <span>
          {type === 'error'
            ? 'Não foi possível cadastrar seus dados, tente novamente'
            : 'Parabéns, seus dados foram cadastrados com sucesso'}
        </span>
        <button
          type="button"
          className="closeModal"
          onClick={() => handleClose()}
        >
          Fechar
        </button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  type: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};
export default Modal;
