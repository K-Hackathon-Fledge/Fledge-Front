import styled from "styled-components";
import tw from "twin.macro";
import RightArrow from "../../assets/images/right-arrow.png";

interface ContentHeaderProps {
    title: string;
    desc: string;
    onClick?: () => void;
    imgSrc?: string;
    mt?: string;
    mb?: string;
    ml?: string;
    mr?: string;
}

const ContentHeader = ({
    title,
    desc,
    onClick,
    imgSrc,
    mt,
    mb,
    ml,
}: ContentHeaderProps) => {
    return (
        <Container mt={mt} mb={mb} ml={ml} mr={ml}>
            <TextContainer>
                <Title>{title}</Title>
                <Desc>{desc}</Desc>
            </TextContainer>
            {onClick && (
                <Image src={RightArrow} alt="right-arrow" onClick={onClick} />
            )}
            {imgSrc && (
                <img src={imgSrc} alt="content-desc-image" className="image" />
            )}
        </Container>
    );
};

type MarginProps = {
    mt?: string;
    mb?: string;
    ml?: string;
    mr?: string;
};

const Container = styled.div<MarginProps>`
    ${tw`
        flex
        justify-between
        items-center
        w-[1280px]
        m-auto
    `}
    .image {
        ${({ mt, mb, ml, mr }) => `
        ${mt ? `margin-top: ${mt};` : ""}
        ${mb ? `margin-bottom: ${mb};` : ""}
        ${ml ? `margin-left: ${ml};` : ""}
        ${mr ? `margin-right: ${mr};` : ""}
    `}
    }
`;

const Image = styled.img`
    ${tw`
        w-[25.5px]
        h-[51px]
        cursor-pointer
    `}
`;

const TextContainer = styled.div`
    ${tw`
        flex
        flex-col
        gap-[10px]
    `}
`;

const Title = styled.span`
    ${tw`
        text-bold-36
        font-bold
        text-fontColor1
    `}
`;
const Desc = styled.span`
    ${tw`
        text-medium-20
        font-medium
        text-fontColor3
    `}
`;

export default ContentHeader;
