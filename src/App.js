// import { useState } from 'react';
import NavBar from './subComponents/NavBar';
import HomePage from './components/HomePage';
import Footter from './components/Footter';
import AboutPage from './components/AboutPage';
import SkillsPage from './components/SkillsPage';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
// import { ThemeProvider } from 'styled-components';
import GlobalFonts from './assets/Fonts/fonts';

/**
 * THEMES
 */
// const LightTheme = {
//   pageBackground: "white",
//   titleColor: "dc658b",
//   tagLineColor: "black"
// }
// const DarkTheme = {
//   pageBackground: "#282c36",
//   titleColor: "lightpink",
//   tagLineColor: "lavender"
// }
// const themes = {
//   light: LightTheme,
//   dark: DarkTheme,
// }

function App() {

  // const [theme, setTheme] = useState("light")

  return (
    <div>
      <GlobalFonts/>
      <NavBar/>
      <HomePage/>
      <AboutPage/>
      <SkillsPage/>
      <Portfolio/>
      <ContactMe/>
      <Footter/>
    </div>
  );
}

export default App;
