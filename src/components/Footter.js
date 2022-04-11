import React from 'react';
import styled from 'styled-components';
import ScrollToTop from "react-scroll-to-top";
import { AiOutlineFacebook, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { ReactComponent as MySVG } from "../assets/Images/chevron.svg";

const FooterMain = styled.div`
  background-color: #1A1A1A;
  height: 26vh;
  display: block;
  color: #fff;
  font-size: 10px;
  font-weight: 500;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const FooterHead = styled.div`
  display: block;
  padding-top: 30px;
  `
  const Top = styled.p`
  font-family: 'Montserrat';
  margin-top: 1px;
  letter-spacing: 3px;
`

const SocialIcons = styled.div`
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  text-decoration: none; 
`

const Copyright = styled.p`
  font-family: Raleway;
  font-size: 13px;
  font-weight: 500;
  margin-top: 20px;
`

const Footter = () => {

  return (
    <FooterMain>
      <FooterHead>
        <ScrollToTop smooth color='#6f00ff' component={<MySVG/>}/>
        <Top>THANK YOU FOR VIEWING MY PORTFOLIO...</Top>
      </FooterHead>
      <SocialIcons>
        <a href='https://www.facebook.com/profile.php?id=100011660374058' style={{ color: 'white'}}><AiOutlineFacebook size='30px'/></a>
        <a href='https://www.linkedin.com/in/devanshudesai15/' style={{ color: 'white'}}><AiOutlineLinkedin size='30px'/></a>
        <a href='https://www.instagram.com/devanshudesai_/' style={{ color: 'white'}}><AiOutlineInstagram size='30px' /></a>
        <a href='https://www.youtube.com/channel/UCPjxPPsah7SyLh2avR8IPOQ/featured' style={{ color: 'white'}}><AiOutlineYoutube size='30px' /></a>
      </SocialIcons>
      <Copyright>
        @Copyrights Devanshu Desai.
      </Copyright>
    </FooterMain>
  )
}

export default Footter