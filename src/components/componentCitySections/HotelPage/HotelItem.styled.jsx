import styled from 'styled-components';
import { ReactComponent as Stars } from '../../Icons/Stars.svg';
import { ReactComponent as Wifi } from '../../Icons/Wifi.svg';
import { ReactComponent as Location } from '../../Icons/Location.svg';

export const HotelBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  background-color: #F5FAFF;
`;

export const HotelImage = styled.img`
  width: 331px;
  height: 331px;
  margin-right: 20px;
`;

export const HotelDetailsBox = styled.div`
margin-right: 70px;
text-align: left;
`;

export const HotelPriceBox = styled.div`
  display: flex;
  align-items: center;
flex-direction: column;
justify-content: space-evenly;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  margin: 64px 72px 64px 0px;
`;

export const TextSvgBox = styled.div`
font-size: 16px;
font-weight: 600;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
margin-bottom: 24px;
`;

export const HotelName = styled.h2`
font-size: 32px;
font-weight: 600;
line-height: 44px;
letter-spacing: 0em;
text-align: center;
margin-bottom: 12px;
margin-top: 26px;
text-align: left;
`;

export const HotelDescription = styled.p`
font-size: 16px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
margin-bottom: 24px;
`;

export const WifiSvg = styled(Wifi)`
margin-right: 16px;
`;
export const LocationSvg = styled(Location)`
margin-right: 16px;
`;

export const StarsSvg = styled(Stars)`
margin-left: 8px;
`;
