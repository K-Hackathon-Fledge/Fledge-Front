import styled from "styled-components";
import tw from "twin.macro";

interface ButtonProps {
    title: string;
    onClick?: () => void;
    mainColor?: boolean;
    small?: boolean;
    background?: string;
    margin?: boolean;
}

const Button = ({
    title,
    onClick,
    mainColor,
    small,
    background = "color",
    margin = true,
}: ButtonProps) => {
    return (
        <ButtonContainer
            type="button"
            onClick={onClick}
            mainColor={mainColor}
            small={small}
            background={background}
            margin={margin}
        >
            {title}
        </ButtonContainer>
    );
};

interface ButtonContainerProps {
    mainColor?: boolean;
    small?: boolean;
    background?: string;
    margin?: boolean;
}

const ButtonContainer = styled.button<ButtonContainerProps>`
    ${tw`
        p-[6.23px 16.2px]
        bg-subColor
        rounded-[37px]
        text-bold-24
        font-bold
        text-[white]
        font-sans
        text-nowrap
        border-[3px]
        border-subColor
    `}
    ${({ mainColor }) => mainColor && tw`bg-mainColor border-mainColor`}
    ${({ small }) =>
        small &&
        tw`
        p-[0 19px]
        text-bold-20
        font-bold
        rounded-[30px]
        h-[46px]
    `}
    ${({ background }) => background === "white" && tw`bg-white text-subColor`}
    ${({ background, mainColor }) =>
        background === "white" && mainColor && tw`text-mainColor`}

    ${({ margin }) => margin && tw`mt-auto`}
`;

export default Button;
