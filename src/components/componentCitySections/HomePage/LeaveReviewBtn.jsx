/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BtnStyled } from '../../../utils/buttonStyled';
import { ModalOverlay } from '../../ModalOverlay';

const LeaveReviewBtnStyled = styled(BtnStyled)`
margin-bottom: 57px;
`;

export const LeaveReviewBtn = () => {
  const [isLeaveReview, setIsLeaveReview] = useState(true);
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
        onClick={() => setIsLeaveReview(true)}
        isLeaveReview={isLeaveReview}
      >
        Leave a review
      </LeaveReviewBtnStyled>
      {isOpenModal && (
      <ModalOverlay
        onCloseModal={toggleModal}
        isLeaveReview={isLeaveReview}
        closeReviewForm={() => setIsLeaveReview(false)}
      />
      )}
    </>
  );
};
