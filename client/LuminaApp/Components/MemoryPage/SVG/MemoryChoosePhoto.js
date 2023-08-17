//SVG icon to choose photo

import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={75}
    height={75}
    viewBox="0 0 75 75"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={75} height={75} rx={25} fill="white" />
    <Path
      d="M57.4999 26.275V54.5115C57.4999 55.2426 56.9074 55.8351 56.1763 55.8351H27.9398C27.2088 55.8351 26.6162 55.2426 26.6162 54.5115V26.275C26.6162 25.544 27.2088 24.9514 27.9398 24.9514H56.1763C56.9074 24.9514 57.4999 25.544 57.4999 26.275Z"
      fill="white"
      stroke="black"
      strokeWidth={2.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M50.8837 18.3335H21.3236C20.5926 18.3335 20 18.9261 20 19.6571V49.2172"
      fill="white"
    />
    <Path
      d="M50.8837 18.3335H21.3236C20.5926 18.3335 20 18.9261 20 19.6571V49.2172"
      stroke="black"
      strokeWidth={2.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path d="M26.6162 46.5704L38.6264 42.5996L57.4999 49.2175" fill="white" />
    <Path
      d="M26.6162 46.5704L38.6264 42.5996L57.4999 49.2175"
      stroke="black"
      strokeWidth={2.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M47.5729 38.1868C45.7455 38.1868 44.2639 36.7052 44.2639 34.8778C44.2639 33.0504 45.7455 31.5688 47.5729 31.5688C49.4003 31.5688 50.8819 33.0504 50.8819 34.8778C50.8819 36.7052 49.4003 38.1868 47.5729 38.1868Z"
      fill="white"
      stroke="black"
      strokeWidth={2.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
