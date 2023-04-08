import styled from 'styled-components';
import { ReactComponent as Sphere } from '../Icons/globe.svg';

export const NavBarBox = styled.div`
display: flex;
justify-content: space-between;
align-items: start;
height: 103px;
margin-bottom: 65px;
`;

export const LogoWrapper = styled.div`
display: flex;
width: max-content;
`;

export const IconsWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 104px;
`;

export const SphereSvg = styled(Sphere)`
width:32px;
height:32px;
display: block;
`;

export const LogInButton = styled.button`
width: 213px;
height: 56px;
background-color: ${props => props.theme.colors.blue};
font-size:16px;
font-weight:600;
line-height: 22.08px;
color: ${props => props.theme.colors.white};
border:none;
`;
