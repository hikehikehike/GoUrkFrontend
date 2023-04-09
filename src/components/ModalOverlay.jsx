/* eslint-disable no-console */
/* eslint-disable react/require-default-props */
import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Backdrop, Modal, CloseSvg } from './ModalOverlay.styled';
import { SignUpForm } from './forms/SignUpFrom';
import { LoginForm } from './forms/LoginForm';

const modalRoot = document.querySelector('#modal-root');

export const ModalOverlay = ({ onCloseModal, isHasAccount }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  return (createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Modal>
        {/* <button
          type="button"
          onClick={onCloseModal}
        > */}
        <CloseSvg onClick={onCloseModal} />
        {/* </button> */}
        {isHasAccount
          ? (<LoginForm />)
          : (<SignUpForm />)}
      </Modal>
    </Backdrop>, modalRoot,
  )
  );
};

ModalOverlay.propTypes = {
  onCloseModal: PropTypes.func,
  isHasAccount: PropTypes.bool.isRequired,
};
