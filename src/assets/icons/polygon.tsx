import React from "react";
type IconProps = {
  width?: number;
  height?: number;
  color: string;
};
function Polygon({ width, height, color }: IconProps) {
  return (
    <svg
      width={width ? width : "14"}
      height={height ? height : "11"}
      viewBox="0 0 14 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.67795 9.41769C7.88935 10.6318 6.11203 10.6318 5.32344 9.4177L1.2131 3.08941C0.348883 1.75887 1.30378 7.27915e-07 2.89035 8.66618e-07L11.111 1.58529e-06C12.6976 1.724e-06 13.6525 1.75887 12.7883 3.08941L8.67795 9.41769Z"
        fill={color}
      />
    </svg>
  );
}

export default Polygon;
