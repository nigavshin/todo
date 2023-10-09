import { createGlobalStyle } from "styled-components";
import LatoLightWoff2 from "../fonts/Lato-Light.woff2";
import LatoWoff2 from "../fonts/Lato-Regular.woff2";
import LatoBlackWoff2 from "../fonts/Lato-Black.woff2";
import LatoBoldWoff2 from "../fonts/Lato-Bold.woff2";


const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Lato';
  src: url(${LatoLightWoff2}) format('woff2');
  font-style: normal;
  font-weight: 300;
  font-display: swap;
}

@font-face {
  font-family: 'Lato';
  src: url(${LatoWoff2}) format('woff2');
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'Lato';
  src: url(${LatoBoldWoff2}) format('woff2');
  font-style: normal;
  font-weight: 700;
  font-display: swap;
}

@font-face {
  font-family: 'Lato';
  src: url(${LatoBlackWoff2}) format('woff2');
  font-style: normal;
  font-weight: 900;
  font-display: swap;
}
`;

export default FontStyles;
