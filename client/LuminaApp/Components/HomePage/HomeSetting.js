//setting icon for decoration purposes only

import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={34}
    height={34}
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17 21.5001C19.4854 21.5001 21.5 19.4855 21.5 17.0001C21.5 14.5148 19.4854 12.5001 17 12.5001C14.5146 12.5001 12.5 14.5148 12.5 17.0001C12.5 19.4855 14.5146 21.5001 17 21.5001Z"
      stroke="white"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M28.4336 14.5931L26.7871 10.6172L29 8L26 5L23.397 7.22443L19.3367 5.55461L18.4029 2H15.4715L14.5237 5.6017L10.5566 7.27394L8 5L5 8L7.18006 10.6833L5.55875 14.6694L2 15.5V18.5L5.60167 19.4833L7.27362 23.4495L5 26L8 29L10.6867 26.8105L14.5955 28.4185L15.5 32H18.5L19.4067 28.4198L23.3827 26.7732C24.0454 27.2469 26 29 26 29L29 26L26.7738 23.3741L28.4208 19.397L31.9999 18.4658L32 15.5L28.4336 14.5931Z"
      stroke="white"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
