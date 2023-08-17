import * as React from "react";
import Svg, { Rect, Defs, LinearGradient, Stop } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={600}
    height={1298}
    viewBox="0 0 390 844"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={390} height={844} fill="url(#paint0_linear_1398_486)" />
    <Defs>
      <LinearGradient
        id="paint0_linear_1398_486"
        x1={195}
        y1={0}
        x2={195}
        y2={844}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0D005A" />
        <Stop offset={1} stopColor="#3B3E84" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SVGComponent;
