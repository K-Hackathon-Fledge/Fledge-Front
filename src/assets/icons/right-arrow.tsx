import React from "react";

type IconProps = {
    width?: number;
    height?: number;
    color?: string;
};

const RightArrowIcon = ({ width, height, color = "#EEC65D" }: IconProps) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 29 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M1.86719 2L26.0004 27.5L1.86719 53"
            stroke={color}
            stroke-width="3"
            stroke-linecap="round"
        />
    </svg>
);

export default RightArrowIcon;
