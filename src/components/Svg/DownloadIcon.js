import * as React from "react";
const SVGComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={256}
    height={256}
    {...props}
  >
    <path
      d="M22 25H10a1 1 0 0 0 0 2H22a1 1 0 0 0 0-2zM15.27 23.69l.05 0a1 1 0 0 0 .26.18l0 0h0A1 1 0 0 0 16 24a1 1 0 0 0 .38-.08s.07-.05.11-.07a1.32 1.32 0 0 0 .2-.12 0 0 0 0 0 0 0h0l5-5.26a1 1 0 1 0-1.46-1.38L17 20.5V6a1 1 0 0 0-2 0V20.5l-3.27-3.45a1 1 0 0 0-1.46 1.38z"
      fill="#000000"
      className="color000 svgShape"
    />
  </svg>
);
export default SVGComponent;
