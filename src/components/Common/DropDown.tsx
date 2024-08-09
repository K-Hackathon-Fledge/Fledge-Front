import styled from "styled-components";
import tw from "twin.macro";
import arrow from "../../assets/images/under-arrow-small.png";
import { useState } from "react";

interface InputProps {
    hint?: string;
    items?: string[];
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    width?: string;
    type?: string;
}

const DropDown = ({
    hint,
    value,
    items,
    width,
    type,
    onChange,
}: InputProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const typeHandler = (type: string) => {
        switch (type) {
            case "year":
                return Array.from({ length: 100 }, (_, i) => 2024 - i);
            case "month":
                return Array.from({ length: 12 }, (_, i) => i + 1);
            case "day":
                return Array.from({ length: 31 }, (_, i) => i + 1);
            case "gender":
                return ["남성", "여성"];
        }
    };

    const typeItems = type ? typeHandler(type) : items;

    if (!typeItems) return null;

    return (
        <Container style={{ width: width }}>
            <div style={{ visibility: hint ? "visible" : "hidden" }}>
                {hint || "Placeholder"}
            </div>
            <div>
                <DropdownButton
                    style={{ width: width }}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span>{value ? value : typeItems[0]}</span>
                    <img
                        src={arrow}
                        alt="dropdown-arrow"
                        className={`${isOpen && ` rotate-180`}`}
                    />
                </DropdownButton>
                {isOpen && (
                    <DropdownList style={{ width: width }}>
                        {typeItems.map((item, index) => (
                            <DropdownItem
                                key={index}
                                onClick={() => {
                                    onChange &&
                                        onChange({
                                            target: { value: item },
                                        } as any);
                                    setIsOpen(false);
                                }}
                            >
                                {item}
                            </DropdownItem>
                        ))}
                    </DropdownList>
                )}
            </div>
        </Container>
    );
};

export default DropDown;

const Container = styled.div`
    ${tw`
        flex flex-col gap-[16px]
        text-medium-20 font-medium text-fontColor3
        justify-center items-start
        relative
    `}
`;
const DropdownButton = styled.div`
    ${tw`
        flex items-center justify-between
         gap-[4px] h-[46px] bg-white px-[19px] rounded-full text-medium-20 font-medium text-fontColor1 cursor-pointer
    `}
    span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

const DropdownList = styled.ul`
    ${tw`
        bg-white rounded-[16px] absolute top-[90px] left-0 z-[1]
    `}
    width: auto; // 너비를 자동 조절
    min-width: 100%; // 최소 너비를 100%로 설정
    max-height: 200px;
    overflow-y: auto;
`;

const DropdownItem = styled.li`
    ${tw`
        px-[19px] text-medium-20 font-medium text-fontColor1 cursor-pointer z-[10]
        flex items-center
    `}
    min-height: 46px; // 최소 높이 유지
    white-space: nowrap; // 텍스트가 한 줄에 표시
    overflow: hidden;
    text-overflow: ellipsis;
    width: auto; // 너비를 자동 조절
    &:hover {
        ${tw`
            bg-background
        `}
    }
`;
