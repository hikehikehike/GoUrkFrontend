import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BtnStyled } from '../../utils/buttonStyled';
import { ModalOverlay } from '../ModalOverlay';

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
  }, []);

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
        />
      )}
    </>
  );
};

ButtonNav.propTypes = {
  buttonName: PropTypes.string.isRequired,
  isHasAccount: PropTypes.bool.isRequired,
};
