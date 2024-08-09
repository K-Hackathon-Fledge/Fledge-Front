import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as Search } from "../../assets/icons/search-icon.svg";
import { forwardRef } from "react";
interface InputProps {
    icon?: boolean;
    hint?: string;
    placeholder?: string;
    value?: string | number;
    width?: string;
    disabled?: boolean;
    type?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            icon = false,
            hint,
            placeholder,
            value,
            width,
            type = "text",
            disabled = false,
            onChange,
            style,
        },
        ref
    ) => {
        return (
            <Container width={width}>
                {/* 직접 width 속성을 전달 */}
                <span>{hint}</span>
                <div className="input">
                    {icon && <Search />}
                    <input
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        disabled={disabled}
                        ref={ref}
                        style={style}
                    />
                </div>
            </Container>
        );
    }
);

export default Input;

interface ContainerProps {
    width?: string;
}

const Container = styled.div<ContainerProps>`
    ${tw`
        flex flex-col items-start gap-[15px]
    `}
    span {
        ${tw`
            text-medium-20 font-medium text-fontColor3
        `}
    }
    .input {
        ${tw`
            px-[21px] h-[46px] bg-white flex items-center rounded-full
        `}
        svg {
            ${tw`
                mr-[10px]
            `}
        }
        width: 100%; /* Container 내부의 input 요소의 너비를 100%로 설정 */
    }
    input {
        ${tw`
            outline-none rounded-full text-medium-20 font-medium text-fontColor1 truncate pl-1
        `}
        width: 100%; /* 컨테이너 내에서 input의 너비를 100%로 설정 */

        &:disabled {
            ${tw`
                bg-white
            `}
        }
    }
    ${(props) =>
        props.width &&
        `width: ${props.width};`}/* Container의 너비를 props에서 받아 적용 */
`;
