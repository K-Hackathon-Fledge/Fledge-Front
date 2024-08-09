import styled from "styled-components";
import tw from "twin.macro";
import LikeIcon from "../../assets/icons/like-icon";

interface HeartProps {
    heartCount: number;
    fill: boolean;
    onClick: () => void;
}

const Heart = ({ heartCount, fill = false, onClick }: HeartProps) => {
    return (
        <HeartContainer onClick={onClick}>
            <LikeIcon fill={fill} />
            <HeartCount onClick={(e) => e.stopPropagation()}>
                {heartCount}
            </HeartCount>
        </HeartContainer>
    );
};

export default Heart;

const HeartContainer = styled.div`
    ${tw`
        flex
        flex-col
        items-center
        justify-end
    `}
    svg {
        ${tw`
            cursor-pointer
        `}
    }
`;

const HeartCount = styled.span`
    ${tw`
        text-bold-10
        font-bold
        text-mainColor
    `}
`;
