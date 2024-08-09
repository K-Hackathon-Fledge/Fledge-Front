import styled from "styled-components";
import tw from "twin.macro";
import Input from "../Common/Input";

const SearchBar = () => {
    return (
        <Search>
            <Input placeholder="챌린지 검색" width="1016px" icon />
            <Keywords>
                <div>생활</div>
                <div>주거</div>
                <div>재정관리</div>
                <div>취업</div>
                <div>학습</div>
                <div>자기계발</div>
                <div>웰빙</div>
                <div>자격증</div>
            </Keywords>
        </Search>
    );
};

export default SearchBar;

const Search = styled.div`
    ${tw`
        flex flex-col items-center gap-[16px] mb-[-80px]
    `}
`;

const Keywords = styled.div`
    ${tw`
        flex gap-[15px]
    `}
    div {
        ${tw`
            h-[33px] border border-mainColor border-[2px] rounded-[37px] px-[12px]
            text-medium-20 font-medium text-mainColor flex items-center justify-center
            bg-[250, 248, 245, 0.3]
        `}
    }
`;
