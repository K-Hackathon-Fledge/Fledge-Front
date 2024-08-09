import React from "react";

type IconProps = {
  width?: number;
  height?: number;
};
const AddIcon = ({ width, height }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 65 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M36.917 28.082V0H28.082V28.082H0V36.917H28.082V65H36.917V36.917H65V28.082H36.917Z"
      fill="#EEC65D"
    />
  </svg>
);

export default AddIcon;
