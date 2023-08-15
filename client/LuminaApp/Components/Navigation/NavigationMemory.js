import * as React from "react";
import Svg, { Circle } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={31}
    height={33}
    viewBox="0 0 31 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={14} cy={14} r={12.75} stroke="white" strokeWidth={2.5} />
    <Circle cx={22.5} cy={24.5} r={7.25} stroke="white" strokeWidth={2.5} />
  </Svg>
);
export default SVGComponent;
