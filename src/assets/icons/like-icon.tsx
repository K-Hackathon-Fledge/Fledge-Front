type IconProps = {
    fill?: boolean;
    small?: boolean;
};
const LikeIcon = ({ fill = false, small = true }: IconProps) =>
    small ? (
        <svg
            width="21"
            height="18"
            viewBox="0 0 21 18"
            fill={fill ? "#EEC65D" : "none"}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19.0697 5.30281C18.9274 3.79509 17.9573 1 14.445 1C10.9327 1 10.0543 3.69362 10.0543 3.69362C10.0543 3.69362 9.17578 1 5.66352 1C2.15125 1 1.17789 3.79509 1.0372 5.30281C0.626594 9.66587 3.61374 14.0305 10.0526 17C16.4931 14.0305 19.4787 9.66587 19.068 5.30281H19.0697Z"
                stroke="#EEC65D"
                stroke-width="2"
                stroke-linejoin="round"
            />
        </svg>
    ) : (
        <svg
            width="47"
            height="42"
            viewBox="0 0 47 42"
            fill={fill ? "#EEC65D" : "none"}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M44.9155 12.2192C44.5775 8.63833 42.2735 2 33.9319 2C25.5902 2 23.5039 8.39734 23.5039 8.39734C23.5039 8.39734 21.4175 2 13.0759 2C4.73422 2 2.42249 8.63833 2.08836 12.2192C1.11316 22.5815 8.20763 32.9475 23.5 40C38.7962 32.9475 45.8868 22.5815 44.9116 12.2192H44.9155Z"
                stroke="#EEC65D"
                stroke-width="3"
                stroke-linejoin="round"
            />
        </svg>
    );

export default LikeIcon;
