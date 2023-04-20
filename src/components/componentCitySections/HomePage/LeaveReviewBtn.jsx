/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BtnStyled } from '../../../utils/buttonStyled';
import { ModalOverlay } from '../../ModalOverlay/ModalOverlay';
import { ReviewForm } from '../../Forms/ReviewForm';

const LeaveReviewBtnStyled = styled(BtnStyled)`
margin-bottom: 57px;
`;

export const LeaveReviewBtn = () => {
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
      <LeaveReviewBtnStyled
        type="button"
        onClick={() => toggleModal()}

      >
        Leave a review
      </LeaveReviewBtnStyled>
      {isOpenModal && (
      <ModalOverlay
        onCloseModal={toggleModal}
      >
        <ReviewForm />
      </ModalOverlay>
      )}
    </>
  );
};
