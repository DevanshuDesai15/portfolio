import React from 'react';
import styled from 'styled-components';
import separator from '../assets/Images/separator.jpg';
import {FaPencilRuler, FaTools, FaDatabase} from 'react-icons/fa';

const AboutMain = styled.div`
  background-color: #E5E5E5;
  height: 170vh;
`;
const AboutHead = styled.div`
  padding-top: 40px;
`;
const ABOUT = styled.div`
  width: 250px;
  border: 5px solid transparent;
  border-image: linear-gradient(to right, #FF5348, #810BB8, #2300F9);
  border-image-slice: 1;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-weight: bold;
  font-family: 'Montserrat';
  letter-spacing: 10px;
  color: black;
  font-size: 25px;
  padding: 10px;
  display: block;
`;

const AboutPara = styled.div`
  height: 10vh;
  color: black;
  padding: 100px;
  align-items: center;
  padding-top: 50px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
`;
const Para = styled.p`
  font-family: OpenSans;
  color: black;
  text-align: center;
  font-weight: bold;
`;
const ReadMore = styled.button`
  height: 40px;
  width: 120px;
  border: none;
  margin-top: 30px;
  border-left:2px solid black;
  border-right: 2px solid black;
  background: transparent;
  font-family: 'Montserrat';
  letter-spacing: 2px;
  font-size: medium;
  cursor: pointer;
`;
const Seperator = styled.div`
  margin: 50px 0 0 90vh;

  @media (max-width: 700px){
  margin-left: 120px;
  margin-top: 140px;
}
`;
const DDWrap = styled.div`
  margin-top: 30px;
  display: flex;
  margin-left: 80px;
  margin-right: auto;
  align-items: center;

  @media (max-width: 700px){
    display: block;
}
`;

const DWrapper = styled.div`
  position: relative;
`;
const Dev = styled.div`
  height: 30vh;
  width: 80vh;
  display: block;
  margin-left: 50px;
  margin-top: 50px;
  background-color: aliceblue;
  border-radius: 10px;

  @media (max-width: 700px){
    width: 20vh;
}
`;

const Devtwo = styled.div`
  height: 30vh;
  width: 80vh;
  margin-left: 65vh;
  margin-top: 50px;
  display: block;
  background-color: aliceblue;
  border-radius: 10px;

  @media (max-width: 700px){
    width: 20vh;
    margin-left: 130px;
}
`;

const DIcon = styled.div`
  position: absolute;
  opacity: 0.15;
`;
const DHead = styled.div`
  color: black;
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: x-large;
  letter-spacing: 8px;
  z-index: 1;
  margin: 8px 0 0 15px;

  @media (max-width: 700px){
    font-size: medium;
    letter-spacing: 3px;
}
`;
const DPara = styled.div`
  font-family: 'OpenSans';
  font-size: 15px;
  margin-top: 20px;
  text-align: center;
  padding: 20px;
`;

const Septimg = styled.img`
  margin-left: 89vh;

  @media (max-width: 700px){
  margin-left: 120px;
}
`;


const AboutPage = () => {
  return (
    <div id='about'>
      <AboutMain>
        <AboutHead>
          <ABOUT>ABOUT</ABOUT>
        </AboutHead>
        <AboutPara>
          <Para>
            I am a Data Science Enthusisast, I have done multiple projects in different areas of technology and after 
            understanding those areas I now realise that I am more incline towards Data Analysis.
          </Para>
          <ReadMore>EXPLORE</ReadMore><br/>
        </AboutPara>
        <Seperator> <img src={separator} alt='' /> </Seperator>
        <DDWrap>
        <Dev>
          <DWrapper>
          <DIcon> <FaPencilRuler size={50} /> </DIcon>
          <DHead>
            DESIGN
          </DHead>
          </DWrapper>
          <DPara>
            I can design the site based on your needs and suggestions. 
            I can also design the site from scratch and consult you during the job.
          </DPara>
        </Dev>
        <Dev>
          <DWrapper>
            <DIcon><FaTools size={50} /></DIcon>
            <DHead>DEVELOPMENT</DHead>
          </DWrapper>
          <DPara>
          I can design the site based on your needs and suggestions. 
          I can also design the site from scratch and consult you during the job.
          </DPara>
        </Dev>
        </DDWrap>
        <Devtwo>
          <DWrapper>
              <DIcon><FaDatabase size={50} /></DIcon>
              <DHead>DATABASE</DHead>
          </DWrapper>
           <DPara>
              I also have experience in database systems. I have done 1 internship in MySQL.
              And I can also connect frontend and backend.
            </DPara>
        </Devtwo>
      </AboutMain>
      <Septimg src={separator} alt='' />
    </div>
  )
}

export default AboutPage