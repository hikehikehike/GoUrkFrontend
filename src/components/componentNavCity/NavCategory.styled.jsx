import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavCategoryBox = styled.div`
display: flex;
justify-content: space-evenly;
margin-bottom: 90px;
`;

export const NavLinkStyled = styled(NavLink)`
display: flex;
justify-content: center;
align-items: center;
height: 72px;
width: 212px;
border-radius: 5px;
background-color: ${props => props.theme.colors.white};
color: ${props => props.theme.colors.gray};
font-family: MacPaw Fixel;
font-size: 20px;
font-weight: 400;
line-height: 28px;
letter-spacing: 0em;
text-align: center;
&.active{
background-color: ${props => props.theme.colors.blue};
color: ${props => props.theme.colors.white};
}
`;
