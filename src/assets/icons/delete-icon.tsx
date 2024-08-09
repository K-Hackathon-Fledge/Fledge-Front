type IconProps = {
    width?: number;
    height?: number;
    color?: string;
};
function DeleteIcon({ width, height, color }: IconProps) {
    return (
        <svg
            width={width ? width : "46"}
            height={height ? height : "55"}
            viewBox="0 0 49 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.1875 55C7.50313 55 6.06171 54.4021 4.86325 53.2064C3.66275 52.0086 3.0625 50.5694 3.0625 48.8889V9.16667H0V3.05556H15.3125V0H33.6875V3.05556H49V9.16667H45.9375V48.8889C45.9375 50.5694 45.3383 52.0086 44.1398 53.2064C42.9393 54.4021 41.4969 55 39.8125 55H9.1875ZM39.8125 9.16667H9.1875V48.8889H39.8125V9.16667ZM15.3125 42.7778H21.4375V15.2778H15.3125V42.7778ZM27.5625 42.7778H33.6875V15.2778H27.5625V42.7778Z"
                fill={color ? color : "#9D9D9D"}
            />
        </svg>
    );
}

export default DeleteIcon;
