import React from 'react';
import styled from 'styled-components';

const SkillMain = styled.div`
  background-color: #E5E5E5;
  height: 100vh;
`;
const SkillHead = styled.div`
  padding-top: 40px;
`;
const SKILL = styled.div`
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
`;

const SkillsPage = () => {
  return (
    <div id='skills'>
      <SkillMain>
        <SkillHead>
          <SKILL>SKILL</SKILL>
        </SkillHead>
      </SkillMain>
    </div>
  )
}

export default SkillsPage