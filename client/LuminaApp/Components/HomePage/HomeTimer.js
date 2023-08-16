//timer svg, has no purpose but decorations

import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={34}
    height={37}
    viewBox="0 0 34 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M25.3333 20.3333H17V12"
      stroke="white"
      strokeWidth={2.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.33301 4.5L8.66634 2"
      stroke="white"
      strokeWidth={2.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M28.6663 4.5L25.333 2"
      stroke="white"
      strokeWidth={2.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17 35.3333C25.2843 35.3333 32 28.6176 32 20.3333C32 12.049 25.2843 5.33327 17 5.33327C8.71573 5.33327 2 12.049 2 20.3333C2 28.6176 8.71573 35.3333 17 35.3333Z"
      stroke="white"
      strokeWidth={2.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
