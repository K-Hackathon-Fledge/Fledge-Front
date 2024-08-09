import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { categories } from "../../@types/sponsor-category";
import useFilterStore from "../../storage/useFilterStore";

function Filter() {
  // 체크박스 상태를 저장할 타입 정의
  const { checkedCategories, setCheckedCategories, resetFilters } =
    useFilterStore();

  const handleCheckboxChange = (id: string) => {
    if (checkedCategories.includes(id)) {
      setCheckedCategories(
        checkedCategories.filter((categoryId) => categoryId !== id)
      );
    } else {
      setCheckedCategories([...checkedCategories, id]);
    }
  };

  const handleReset = () => {
    resetFilters();
  };
  return (
    <Wrapper>
      <HeaderWrapper>
        <span className="filter-title">필터링</span>
        <button className="reset-button" onClick={handleReset}>
          초기화
        </button>
      </HeaderWrapper>
      <span className="category-title">후원 구분</span>
      <CheckboxWrapper>
        {categories.map((category) => (
          <div className="flex flex-row items-center mb-2">
            <Checkbox key={category.id} htmlFor={category.id}>
              <input
                type="checkbox"
                id={category.id}
                name="category"
                value={category.id}
                checked={checkedCategories.includes(category.id)}
                onChange={() => handleCheckboxChange(category.id)}
              />
              <span className="checkmark">
                {checkedCategories.includes(category.id) && (
                  <span className="checkmark-v">✔</span>
                )}
              </span>
            </Checkbox>
            <CategoryText> {category.label}</CategoryText>
          </div>
        ))}
      </CheckboxWrapper>
    </Wrapper>
  );
}

export default Filter;

const Wrapper = styled.div`
  ${tw`flex flex-col w-1/4 `}

  .category-title {
    ${tw`font-sans text-bold-20 text-fontColor1 font-bold mt-6`}
  }
`;

const HeaderWrapper = styled.div`
  ${tw`flex flex-row items-end`}
  .filter-title {
    ${tw`text-bold-36 font-sans font-bold text-fontColor1 `}
  }
  .reset-button {
    ${tw`w-11 h-3 text-medium-15 font-sans text-fontColor3 [text-decoration-line: underline] ml-3 mb-1.5`}
  }
`;

const CheckboxWrapper = styled.div`
  ${tw`flex flex-col mt-4`}
`;

const Checkbox = styled.label`
  ${tw`flex items-center   cursor-pointer w-5 h-5`}

  input[type="checkbox"] {
    ${tw`absolute opacity-0 cursor-pointer`}
  }

  .checkmark {
    ${tw`relative w-5 h-5 border border-fontColor1 transition-all duration-300`}
  }

  input:checked + .checkmark {
    ${tw`bg-mainColor border-none`}
  }

  .checkmark-v {
    ${tw`absolute left-0 top-0 w-full h-full flex items-center justify-center text-white`}
    ${tw`transition-all duration-300`}
  }
`;

const CategoryText = styled.span`
  ${tw`ml-2 text-fontColor1 font-sans text-bold-20`}
`;
