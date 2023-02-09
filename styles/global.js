import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html,
body {
  background-color: #fafafa;
  padding: 0;
  margin: 0;
  background-color: #f2f2f2;
}

* {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  
}

.CookieConsent {

    div {
      :nth-child(1) {
        flex: none!important;
      }
    }

}

`;

export default GlobalStyles;
