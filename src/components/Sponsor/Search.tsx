import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import useFilterStore from "../../storage/useFilterStore";
function Search() {
  const { keyword, setKeyword } = useFilterStore((state) => ({
    keyword: state.keyword,
    setKeyword: state.setKeyword,
  }));

  return (
    <Wrapper>
      <SearchIcon />
      <input
        type="text"
        placeholder="후원글 키워드 검색"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      ></input>
    </Wrapper>
  );
}

export default Search;

const Wrapper = styled.div`
  ${tw`w-[648px] h-12 bg-white [border-radius: 37px] flex flex-row p-3`}

  input {
    ${tw`border-none font-sans text-medium-20 text-fontColor1 pl-2.5`}
    &::placeholder {
      ${tw`text-fontColor2`}
    }
    &:focus {
      outline: none;
    }
  }
`;
