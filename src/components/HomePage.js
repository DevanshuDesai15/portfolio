import React from 'react'
import ReactTyped from 'react-typed';
import styled from 'styled-components';
import Back from '../assets/Images/backHome.png';
// import Particles from "react-tsparticles";
import gmail from '../assets/Images/gmail.svg';
import linkedin from '../assets/Images/linkedin.svg';
import github from '../assets/Images/github.svg';

const HomeBack = styled.div`
height: 91vh;
background-image: url(${Back});
background-size: cover;
display: flex;
@media (max-width: 700px){
  background-image: none;
  background-color: black;
  color: white;
  width: auto;
  height: 95vh;
}
`
const CenterText = styled.div`
font-family: 'Raleway';
font-size: 40px;
margin-top: 20vh;
margin-left: 20vh;
font-weight: bold;
@media (max-width: 700px){
  width: 100%;
  margin-left: 0px;
  margin-top: 60vh;
  background-color: rgba(83, 73, 73, 0.4);
  display: flex;
}
`
const NameHead = styled.h1`
font-size: 60px;
margin-top: 10px;
font-weight: bold;
@media (max-width: 700px){
  font-size: 40px;
}
`
const OnlyText = styled.div`
@media (max-width: 700px){
  margin-top: 40px;
  margin-left: 20px;
}
`;

const Rtyped = styled.div`
  font-size: 20px;
  color: #625E5E;
  font-weight: bold;
  margin-left: 30px;
  margin-top: 10px;
`;

const SocialIcons = styled.div`
margin-top: 50px;
width: 200px;
display: flex;
justify-content: space-between;
@media (max-width: 700px){
  display: grid;
  margin-left: 140px;
}
`;

const Email = styled.div`
background-color: #C4C4C4;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
display: block;
border-radius: 8px;
width: 45px;
height: 45px;
align-items: center;
img{
  margin-left: 8px;
  margin-top: 8px;
}
`;

const GitHub = styled.div`
background-color: #C4C4C4;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
display: block;
border-radius: 8px;
width: 45px;
height: 45px;
align-items: center;
img{
  margin-left: 8px;
  margin-top: 8px;
}
`;

const Linkedin = styled.div`
background-color: #C4C4C4;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: block;
  border-radius: 8px;
  width: 45px;
  height: 45px;
  align-items: center;
  img{
    margin-left: 8px;
    margin-top: 8px;
  }
`;

const IntroductionSec = styled.div`
  background-color: #1A1A1A;
  height: 40vh;
  margin: 0px;

  @media (max-width: 700px) {
    height: 30vh;
  }
`;

const Hedng = styled.p`
  color: white;
  letter-spacing: 5px;
  padding: 10px;
  margin: 0px;
  font-size: 30px;
  font-weight: bold;
`;

const Para = styled.p`
  font-family: OpenSans;
  color: white;
  padding-left: 30px;
  margin: 0;
`;

const Resume = styled.div`
  height: 30px;
  width: 100px;
  margin-left: 40px;
  margin-top: 100px;
  text-align: center;
  border-left: 3px solid white;
  border-right: 3px solid white;

  @media (min-width: 700px) {
    margin-top: 40px;
  }
`;

const ReName = styled.a`
  color: white;
  font-family: Montserrat;
  text-decoration: none;
`;

const HomePage = () => {

  // const particlesInit = (main) => {
  //   console.log(main);

  //   // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // };

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };

  return (
    <>
    <HomeBack id='home'>
    {/* <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 1,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#D78204",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    /> */}
      <CenterText>
        <OnlyText>
        Hi, I am
        <NameHead>Devanshu Desai</NameHead>
        <Rtyped>
          <ReactTyped 
              strings={['Web App Developer', 'Data Analysis Enthusiast', 'Android Developer']} 
            typeSpeed={70} 
            backSpeed={60} 
            loop 
          />
        </Rtyped>
        </OnlyText>
      <SocialIcons>
        <Email>
          <a href={'mailto: devanshudesai15@gmail.com'}>
          <img src={gmail} alt='Gmail' />
          </a>
        </Email>
        <GitHub>
          <a href="https://github.com/DevanshuDesai15"><img src={github} alt='Git-Hub' /></a>
        </GitHub>
        <Linkedin>
          <a href="https://www.linkedin.com/in/devanshudesai15/"><img src={linkedin} alt='LinkedIn' /></a>
        </Linkedin>
      </SocialIcons>
      </CenterText>
    </HomeBack>
    <IntroductionSec>
      <Hedng>INTRODUCTION</Hedng>
      <Para>
        Hello I am Devanshu Desai an undergraduate student, who is studying.....  
      </Para>
      <Resume>
        <ReName href='https://drive.google.com/file/d/1deF3OMNqyceK-GWli5BjUmeaVYrdrU4O/view'> Resume </ReName>
      </Resume>
    </IntroductionSec>
    </>
  )
}

export default HomePage