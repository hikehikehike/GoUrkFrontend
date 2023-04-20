import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BtnStyled } from '../../utils/buttonStyled';
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
import { LoginForm } from '../Forms/LoginForm';
import { SignUpForm } from '../Forms/SignUpFrom';

export const ButtonNav = ({ buttonName, isHasAccount }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(prevState => !prevState);
  };

  const modalHandler = (e) => {
    if (e.code === 'Escape') {
      toggleModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', modalHandler);

    return () => {
      window.removeEventListener('keydown', modalHandler);
    };
  }, [isOpenModal]);

  return (
    <>
      <BtnStyled
        type="button"
        onClick={toggleModal}
      >
        {buttonName}
      </BtnStyled>
      {isOpenModal && (
        <ModalOverlay
          onCloseModal={toggleModal}
          isHasAccount={isHasAccount}
        >
          {isHasAccount ? <LoginForm /> : <SignUpForm />}
        </ModalOverlay>
      )}
    </>
  );
};

ButtonNav.propTypes = {
  buttonName: PropTypes.string.isRequired,
  isHasAccount: PropTypes.bool.isRequired,
};
