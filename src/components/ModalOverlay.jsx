/* eslint-disable no-console */
/* eslint-disable react/require-default-props */
import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Backdrop, Modal, CloseSvg } from './ModalOverlay.styled';
import { SignUpForm } from './forms/SignUpFrom';
import { LoginForm } from './forms/LoginForm';
import { ReviewForm } from './forms/ReviewForm';

const modalRoot = document.querySelector('#modal-root');

export const ModalOverlay = ({ onCloseModal, isHasAccount,
  isLeaveReview }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  return (createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Modal>
        <CloseSvg onClick={onCloseModal} />
        {isLeaveReview && <ReviewForm />}
        {isHasAccount && !isLeaveReview
          ? (<LoginForm />)
          : (<SignUpForm />)}
      </Modal>
    </Backdrop>, modalRoot,
  )
  );
};

ModalOverlay.propTypes = {
  onCloseModal: PropTypes.func,
  isHasAccount: PropTypes.bool,
  isLeaveReview: PropTypes.bool,
};
