import styled from "styled-components";
import tw from "twin.macro";

export interface BenefitProps {
    title: string;
    price: string;
}

const Benefit = ({ title, price }: BenefitProps) => {
    return (
        <div>
            <span>{title}, </span>
            <BenefitPrice>{price}</BenefitPrice> 지원
        </div>
    );
};

export default Benefit;

const BenefitPrice = styled.span`
    ${tw`
        text-[red]
    `}
`;
