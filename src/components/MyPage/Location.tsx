import styled from "styled-components";
import XIcon from "../../assets/icons/x-icon";
import tw from "twin.macro";

interface LocationProps {
    text: string | null;
    onClick: () => void;
}

const Location = ({ text, onClick }: LocationProps) => {
    return (
        <Container>
            <span>{text}</span>
            <button
                onClick={() => {
                    onClick();
                }}
            >
                <XIcon />
            </button>
        </Container>
    );
};

export default Location;

const Container = styled.div`
    ${tw`
            h-[46px] flex gap-[10px] px-[21px]
            border-[3px] border-mainColor rounded-full
            justify-center items-center 
        `}
    span {
        ${tw`
            text-medium-20 font-medium text-mainColor mt-[-2px]
        `}
    }
`;
