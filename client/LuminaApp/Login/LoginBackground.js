import * as React from "react";
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg";

const LoginBackground = (props) => (
  <Svg
    width={600}
    height={1298}
    viewBox="0 0 390 844"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={691} height={845} fill="url(#paint0_linear_1357_488)" />
    <Defs>
      <LinearGradient
        id="paint0_linear_1357_488"
        x1={295}
        y1={0}
        x2={505}
        y2={844}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3B3E84" />
        <Stop offset={1} stopColor="#9695DB" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default LoginBackground;