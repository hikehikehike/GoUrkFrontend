import styled from 'styled-components';

export const Backdrop = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.6);
    position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // transition: opacity 250ms cubic-bezier(0.215, 0.610, 0.355, 1),
  // visibility: 250ms cubic-bezier(0.215, 0.610, 0.355, 1);
`;
export const Modal = styled.div`
  background-color: white;
  max-width: 350px;
  width: 100%;
  height: auto;
  max-height: 400px;
  padding: 20px;
  border-radius: 5px;
  // transition: transform 250ms cubic-bezier(0.215, 0.610, 0.355, 1),
  // opacity 250ms cubic-bezier(0.215, 0.610, 0.355, 1),
  // background-color 250ms cubic-bezier(0.215, 0.610, 0.355, 1);
`;
