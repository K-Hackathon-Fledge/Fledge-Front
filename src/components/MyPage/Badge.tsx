import styled from "styled-components";
import tw from "twin.macro";
import triangle from "../../assets/images/triangle.png";

interface BadgeProps {
    category: string[];
    title: string;
    date: string;
    image: string;
    index?: number;
}

const Badge = ({ category, title, date, image, index }: BadgeProps) => {
    return (
        <Container index={index}>
            <div className="balloon">
                <div className="container">
                    <div className="category">
                        {category.map((item, index) => (
                            <span key={index} className="category-text">
                                {item}
                            </span>
                        ))}
                    </div>
                    <span className="title-text">{title}</span>
                    <span className="sub-text">{date}</span>
                </div>
                <img src={triangle} alt="triangle" />
            </div>
            <img src={image} alt="badge1" />
        </Container>
    );
};

export default Badge;

interface ContainerProps {
    index?: number;
}

const Container = styled.div<ContainerProps>`
    ${tw`
        flex flex-col items-center
    `}
    ${({ index }) => index !== undefined && index % 2 !== 0 && tw`mt-[60px]`}

    .balloon {
        ${tw`
            w-[165px] h-[139px] bg-white relative rounded-[18px]
        `}
        img {
            ${tw`
                absolute bottom-[-20px] left-[50%] transform -translate-x-1/2
            `}
        }
    }
    .container {
        ${tw`
            flex flex-col items-center justify-center h-full gap-[11px]
        `}
        .category {
            ${tw`
                flex gap-[4px]
            `}
            span {
                ${tw`
                    text-medium-15 font-medium text-white bg-mainColor px-[8px] py-[4px] rounded-[28px]
                `}
            }
        }
        .title-text {
            ${tw`
                text-bold-20 font-bold text-fontColor1 text-center break-keep
            `}
        }
        .sub-text {
            ${tw`
                text-medium-12 font-medium text-fontColor3
            `}
        }
    }
`;
