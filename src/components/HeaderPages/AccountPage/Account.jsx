/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../../Icons/Arrow-left.svg';
import { BackButton, ImgNameWrapper, ProfileImg, TitleAccount, TitleWrapper, UserNameText } from './Account.styled';
import { Container } from '../../../Container.styled';
import { AccountInnerNavigation } from './AccountInnerNavigation';
import { Footer } from '../../Footer/Footer';

export const Account = () => {
  const navigation = useNavigate();

  return (
    <>
      <Container>
        <TitleWrapper>
          <BackButton onClick={() => navigation(-1)}>
            <ArrowLeft />
          </BackButton>
          <TitleAccount>Your Profile</TitleAccount>
        </TitleWrapper>
        <ImgNameWrapper>
          <ProfileImg src="https://qph.cf2.quoracdn.net/main-qimg-9040998f65757443d325083efed8d70c-lq" alt="" />
          <UserNameText>UserName</UserNameText>
        </ImgNameWrapper>
        <AccountInnerNavigation />
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};
