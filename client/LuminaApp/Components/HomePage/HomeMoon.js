//svg of the moon

import * as React from "react";
import Svg, {
  G,
  Rect,
  Path,
  Defs,
  RadialGradient,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SVGComponent = (props) => (
  <Svg
    width={154}
    height={154}
    viewBox="0 0 154 154"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_f_1398_591)">
      <Rect
        x={2}
        y={2}
        width={150}
        height={150}
        rx={75}
        fill="url(#paint0_radial_1398_591)"
      />
    </G>
    <G filter="url(#filter1_if_1398_591)">
      <Path
        d="M119 24C119 29.5229 112.023 28.5 106.5 28.5C102.5 24.5 99 24.0228 99 18.5C99 12.9771 103.477 14 109 14C114.523 14 119 18.4772 119 24Z"
        fill="#D9D9D9"
      />
      <Path
        d="M38.3128 39.2606C32.7606 45.409 28.1105 50.2585 23.8066 46.3719C19.5028 42.4854 20.5148 34.3505 26.067 28.2022C31.6192 22.0538 39.6091 20.2202 43.9129 24.1068C48.2168 27.9933 43.865 33.1123 38.3128 39.2606Z"
        fill="#D9D9D9"
      />
      <Path
        d="M140 116C135.687 123.073 128.291 126.499 123.34 123.48C118.389 120.461 122.187 115.073 126.5 108C130.813 100.927 134.008 94.8471 138.959 97.8661C143.91 100.885 144.313 108.927 140 116Z"
        fill="#D9D9D9"
      />
      <Path
        d="M48 92C48 103.046 40.5457 112 29.5 112C18.4543 112 12 100.546 12 89.5C12 78.4543 18.4543 72 29.5 72C40.5457 72 48 80.9543 48 92Z"
        fill="#D9D9D9"
      />
      <Path
        d="M137 64C137 75.0457 129.546 84 118.5 84C107.454 84 101 78.5457 101 67.5C101 56.4543 107.454 44 118.5 44C129.546 44 137 52.9543 137 64Z"
        fill="#D9D9D9"
      />
      <Path
        d="M95 131C95 136.523 90.5228 141 85 141C79.4772 141 76.5 136.523 76.5 131C76.5 125.477 79.4772 123.5 85 123.5C90.5228 123.5 95 125.477 95 131Z"
        fill="#D9D9D9"
      />
    </G>
    <Defs>
      <RadialGradient
        id="paint0_radial_1398_591"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(77 77) rotate(90) scale(75)"
      >
        <Stop offset={0.854167} stopColor="#F4F4F4" />
        <Stop offset={1} stopColor="#E6E6E6" />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default SVGComponent;