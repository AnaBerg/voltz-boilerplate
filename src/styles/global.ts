import { createGlobalStyle } from "styled-components";

import { colors } from "./colors";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  @font-face {
  font-family: "TTTravels";
  font-weight: 700;
  src: local(TTTravels), url(/fonts/TT-Travels-Bold.otf) format("opentype");
}

@font-face {
  font-family: "TTTravels";
  font-weight: 500;
  src: local(TTTravels), url(/fonts/TT-Travels-Medium.otf) format("opentype");
}

@font-face {
  font-family: "TTTravels";
  font-weight: 400;
  src: local(TTTravels), url(/fonts/TT-Travels-Light.otf) format("opentype");
}

@font-face {
  font-family: "Suprapower";
  font-weight: 900;
  src: local(Suprapower), url(/fonts/Suprapower-Heavy.otf) format("opentype");
}

  html {
    font-size: 60%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 100vh;
    width: 100vw;
    background: radial-gradient(50% 50% at 50% 50%, ${colors.black80} 0%, ${colors.black} 100%);
  }
`;

export default GlobalStyle;