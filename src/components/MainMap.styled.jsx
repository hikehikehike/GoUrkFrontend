/* eslint-disable no-console */
import styled from 'styled-components';

export const RegionList = styled.ul`
  display:flex;
  flex-wrap: wrap;
  position: sticky;
`;

export const RegionItem = styled.li`
position: relative;
transition: all .2s ease-in-out;
  &:hover{
    transform: scale(1.1);
    z-index: 3;
  }
  &.Lutsk{
   margin-left:225px;
   margin-top:82px;
  }
  &.Rivne {
   margin-left: -62px;
   margin-top: 82px;
  }
  &.Zhytomyr {
  margin-left: -32px;;
  margin-top: 108px;
  }
  &.Kyiv {
  margin-left: -28px;
  margin-top: 123px;
  }
  &.Chernihiv {
  margin-left: -95px;
  margin-top: 42px;
  }
  &.Sumy {
  margin-top: 42px;
  margin-left: -32px;
  margin-right: 346px;
  }
  &.Lviv {
  margin-top: -137px;
  margin-left: 172px;
  }
  &.Ternopil {
  margin-left: -44px;
  margin-top: -104px;
  }
  &.Kmelnytskiy {
  margin-top: -132px;
  margin-left: -15px;
  }
  &.Vinnytsia {
  margin-left: -33px;
  margin-top: -68px;
  }
  &.Cherkasy {
  margin-left: -29px;
  margin-top: -102px;
  }
  &.Poltava {
  margin-left: -43px;
  margin-top: -128px;
  }
  &.Kharkiv {
  margin-left: -64px;
  margin-top: -119px;
  }
    &.Uzhhorod {
  margin-left: 141px;
  margin-top: -100px;
  }
    &.IvanoFransivsk {
  margin-top: -140px;
  margin-left: -65px;
  }
    &.Chernivtsi {
  margin-top: -66px;
  margin-left: -43px;
  }
    &.Kropyvnytskyi {
  margin-top: -120px;
  margin-left: 125px;
  }
    &.Dnipro {
  margin-top: -111px;
  margin-left: -58px;
  }
    &.Simfiropol {
  margin-left: -164px;
  margin-top: 52px;
  }
    &.Donetsk {
  margin-top: -116px;
  margin-left: -44px;
  }
    &.Luhansk {
  margin-top: -183px;
  margin-left: -74px;
  }
      &.Odesa {
  margin-left: 488px;
  margin-top: -120px;
  }
      &.Mykolayiv {
  margin-top: -120px;
  margin-left: -64px;
  }
      &.Kherson {
  margin-left: -324px;
  margin-top: -64px;
  }
      &.Zaporizhia {
  margin-top: -110px;
  margin-left: 55px;
  }
`;
