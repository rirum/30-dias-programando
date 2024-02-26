import styled from 'styled-components';
import Link from 'next/link';

export const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(226, 232, 240);
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const StyledLogo = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ProfileAndCart = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-right: 10px;
  }
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-right: 10px;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin-left: 20px;
    cursor: pointer;
  }
`;
