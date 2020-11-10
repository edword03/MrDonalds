import React from 'react';
import styled from 'styled-components';
import logoImg from '../../images/logo.svg';
import signIn from '../../images/sign.svg';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299B01;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const SignIn = styled.button`
    font-size: 16px;
    line-height: 19px;
    background-color: transparent;
    border: none;
    color: #fff;
`;

export const NavBar = () => (

  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo"/>
      <H1>MrDonnald's</H1>
    </Logo>
    <SignIn>
      <img src={signIn} alt="sign in"/>
      <p>войти</p>
    </SignIn>
  </NavBarStyled>
)