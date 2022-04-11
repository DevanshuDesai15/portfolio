import { createGlobalStyle } from "styled-components";

import Montserrat from './Montserrat.woff';
import Montserrat2 from './Montserrat.woff2';
import Raleway from './Raleway.woff';
import Raleway2 from './Raleway.woff2';
import OpenSans from './OpenSans.woff';
import OpenSans2 from './OpenSans.woff2';

export default createGlobalStyle`

  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'), local('Montserrat'),
    url(${Montserrat2}) format('woff2'),
    url(${Montserrat}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Raleway';
    src: local('Raleway'), local('Raleway'),
    url(${Raleway2}) format('woff2'),
    url(${Raleway}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'OpenSans';
    src: local('OpenSans'), local('OpenSans'),
    url(${OpenSans2}) format('woff2'),
    url(${OpenSans}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
`