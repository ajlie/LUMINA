import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={29}
    height={29}
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.9167 2L14.9167 27"
      stroke="white"
      strokeWidth={4}
      strokeLinecap="round"
    />
    <Path
      d="M2 14.9166H27"
      stroke="white"
      strokeWidth={4}
      strokeLinecap="round"
    />
  </Svg>
);
export default SVGComponent;