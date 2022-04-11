import React from 'react';
import styled from 'styled-components';

const PortfolioMain = styled.div`
  background-color: #1D1D1D;
  height: 100vh;
`;
const PortfolioHead = styled.div`
  padding-top: 40px;
`;

const PORTFOLIO = styled.div`
  width: 250px;
  border: 5px solid transparent;
  border-image: linear-gradient(to right, #00FDC0, #00D2DF, #057790);
  border-image-slice: 1;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-family: 'Montserrat';
  letter-spacing: 10px;
  color: white;
  font-size: 25px;
  padding: 10px;
`;


const Portfolio = () => {
  return (
    <div id='portfolio'>
      <PortfolioMain>
        <PortfolioHead>
          <PORTFOLIO>PORTFOLIO</PORTFOLIO>
        </PortfolioHead>
      </PortfolioMain>
    </div>
  )
}

export default Portfolio