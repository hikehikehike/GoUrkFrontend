/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { ReactComponent as ArrowDrive } from '../../Icons/ArrowDrive.svg';
import { ReactComponent as MapDrive } from '../../Icons/MapDrive.svg';

const MapLink = ({ city }) => {
  // Get user's geolocation
  const handleMapLinkClick = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const destination = `${city}`;
      const url = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${destination}`;

      // Navigate to Google Maps with the link
      window.open(url, '_blank');
    });
  };

  return (
    <DrivewayLink
      href="#"
      onClick={handleMapLinkClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      Click here to view directions to
      {' '}
      {city}
    </DrivewayLink>
  );
};

export const DriveWayTitle = styled.p`
font-family: MacPaw Fixel;
font-size: 32px;
font-weight: 400;
line-height: 44px;
letter-spacing: 0em;
text-align: center;
margin-bottom: 90px;
`;

export const DrivewayLink = styled.a`
font-family: Inter;
font-size: 20px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: center;
color: ${props => props.theme.colors.black};
`;

export const DrivewayWrapper = styled.div`
height: 40px;
width: 840px;
border-radius: 10px;
border: 2px solid ${props => props.theme.colors.black};
display: flex;
justify-content: space-between;
padding: 30px;
align-items: center;
margin-bottom: 108px;
`;

export const DrivewayBox = styled.div`
`;

export const MapDriveSvg = styled(MapDrive)`
margin-right: 24px;
`;

export const TransportTitle = styled.p`
font-size: 32px;
font-weight: 400;
line-height: 44px;
letter-spacing: 0em;
text-align: center;
margin-bottom: 56px;
`;

export const DrivewayPageWrapper = styled.div`
align-items: center;
display: flex;
flex-direction: column;
`;

export const TransportPicture = styled.img`
height: 363px;
width: 710px;
`;

export const TransportDescriprion = styled.p`
font-size: 16px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
width: 40%;
`;

export const TransportBox = styled.div`
display: flex;
gap: 24px;
justify-content: space-between;
margin-bottom : 96px;
&.revert-box{
align-items: flex-end;
margin-bottom : 126px;
}
`;
export const DrivewaySection = () => {
  const { city, section } = useParams();

  console.log(city, section);

  return (
    <DrivewayPageWrapper>
      <DriveWayTitle>Map your way with Google Maps</DriveWayTitle>
      <DrivewayWrapper>
        <div>
          <MapDriveSvg />
          <MapLink city={city} />
        </div>
        <ArrowDrive />
      </DrivewayWrapper>
      <div>
        <TransportTitle>Transport hubs</TransportTitle>
        <TransportBox>
          <TransportPicture src="https://upload.wikimedia.org/wikipedia/commons/1/16/%D0%A7%D0%A14-174%2C_%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0%2C_%D0%9A%D0%B8%D0%B5%D0%B2%2C_%D1%81%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D1%8F_%D0%9A%D0%B8%D0%B5%D0%B2-%D0%9F%D0%B0%D1%81%D1%81%D0%B0%D0%B6%D0%B8%D1%80%D1%81%D0%BA%D0%B8%D0%B9_%28Trainpix_147805%29.jpg" alt="" />
          <TransportDescriprion>
            The main train station in Kyiv, also known as Kyiv-Pasazhyrskyi,
            is the largest railway station in Ukraine. Located in the heart
            of the city, it serves as a major transportation hub for both
            domestic and international trains. The station is known for
            its impressive architecture, which combines elements of both
            classical and modern styles, and it offers a wide range of
            services and amenities for travelers, including restaurants,
            cafes, shops, and a currency exchange.
          </TransportDescriprion>
        </TransportBox>
        <TransportBox className="revert-box">
          <TransportDescriprion>
            The main airport in Kyiv is the Boryspil International Airport,
            located approximately 30 kilometers east of the city center.
            It is the largest and busiest airport in Ukraine, serving as
            a hub for several airlines and connecting Kyiv with cities all
            over the world. The airport features modern facilities and amenities,
            including restaurants, duty-free shops, and lounges, and is easily
            accessible by public transportation or taxi. In addition to Boryspil,
            there is also a smaller airport in Kyiv called Zhuliany International
            Airport, which mainly serves low-cost airlines and domestic flights.
          </TransportDescriprion>
          <TransportPicture src="https://ukrainetrek.com/blog/wp-content/uploads/2012/10/boryspil-international-airport-ukraine-terminal-f-view-3.jpg" alt="" />
        </TransportBox>
      </div>
    </DrivewayPageWrapper>
  );
};
