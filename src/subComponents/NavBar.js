import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { Mainlogo } from './AllSVG';
// import Sun from '../assets/sun.svg';
// import Moon from '../assets/moon.svg';

const NavBox = styled.div`
height: ${(props) => (props.extendNav ? "200px" : "60px")};
font-family: Montserrat;
font-weight: 500;
background-color: #000;
background-size: cover;
background-position: center;
display: flex;
flex-direction: column;
align-items: center;
z-index: 2;
`
const LeftContainer = styled.div`
  flex:46%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  @media (max-width: 700px){
    display: none;
  }
`;
const RightContainer = styled.div`
  flex:54%;
  display: flex;
  justify-content: flex-start;
  padding-right: 50px;
  background-color: #C4C4C4;

  @media (max-width: 700px) {
    background-color: black;
  }
`;
const NavBarInnerContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
`;
const NavbarLinkContainer = styled.div`
  display: flex;
`;

const ABOUT = styled(Link)`
  text-decoration: none; 
  color: white;
  margin: 10px;
  padding: 20px;
  cursor: pointer;

  @media (max-width: 700px){
    display: none;
  }
`
const NavLinks = styled(Link)`
  text-decoration: none; 
  color: white;
  margin: 10px;
  padding: 20px;
  cursor: pointer;
  @media (max-width: 700px){
    display: none;
  }
`
const ContactDiv = styled.div`
  height: 40px;
  width: 150px;
  background-color: white;
  border-radius: 20px;
  margin: 17px;
  align-items: center;
  display: flex;
  cursor: pointer;
  @media (max-width: 700px){
    display: none;
  }
`;
const CONTACT = styled(Link)`
  text-decoration: none; 
  color: black;
  padding: 20px;
  cursor: pointer;
  @media (max-width: 700px){
    display: none;
  }
`;

const Logo = styled(Link)`
  height: auto;
  
  @media (max-width: 700px){
    padding-right: 0px;
  }
`;
const Hamburger = styled.button`
  width: 70px;
  padding-left: 290px;
  margin-top: 0;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 700px){
    display: none;
    justify-content: space-between;
  }
`;

const NavbarExtended = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;

const NavLinksExtended = styled(Link)`
  text-decoration: none; 
  color: white;
  margin: 10px;
  cursor: pointer;
`;


const NavBar = () => {

  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavBox extendNav={extendNavbar}>
      <NavBarInnerContainer>
      <RightContainer>
            <Logo to='home'><Mainlogo /></Logo>
        </RightContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <ABOUT smooth={true} to='about'>About</ABOUT>
            <NavLinks smooth={true} to='skills'>Skills</NavLinks>
            <NavLinks smooth={true} to='portfolio'>Portfolio</NavLinks>
            <ContactDiv>
               <CONTACT smooth={true} to='contact'>CONTACT ME</CONTACT>
            </ContactDiv>
          </NavbarLinkContainer>
        </LeftContainer>
        </NavBarInnerContainer>
        <Hamburger onClick={()=>{
          setExtendNavbar((curr) => !curr);
        }}>
          {extendNavbar ? <>&#10005;</> :<>&#8801;</> }
        </Hamburger>
        { extendNavbar && (
          <NavbarExtended>
            <NavLinksExtended smooth={true} to='about'>About</NavLinksExtended>
            <NavLinksExtended smooth={true} to='skills'>Skills</NavLinksExtended>
            <NavLinksExtended smooth={true} to='portfolio'>Portfolio</NavLinksExtended>
              <NavLinksExtended smooth={true} to='contact'>CONTACT ME</NavLinksExtended>
          </NavbarExtended>
        )
        }
    </NavBox>
  )
}

export default NavBar