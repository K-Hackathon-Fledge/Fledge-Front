import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import useFilterStore from "../../storage/useFilterStore";
import { sorts } from "../../@types/sponsor-category";

function SortOption() {
  const { status, setStatus } = useFilterStore();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
  };

  return (
    <>
      <Select value={status} onChange={handleChange}>
        {sorts.map((item, index) => (
          <option value={item.id}>{item.label}</option>
        ))}
      </Select>
    </>
  );
}

export default SortOption;

const Select = styled.select`
  ${tw` text-center text-fontColor3 font-sans text-medium-20 font-medium`}

  background-color: transparent; /* 배경 투명 */
  border: none; /* 테두리 제거 */
  outline: none; /* 포커스 시 outline 제거 */
  appearance: none; /* 기본 화살표 제거 */
  padding: 0; /* 기본 패딩 제거 */
  padding-right: 20px;

  background: url('data:image/svg+xml;utf8,<svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 1L7.5 8L0.999999 0.999999" stroke="%23AE7D43" stroke-width="2" stroke-linecap="round"/></svg>')
    no-repeat right center;
  background-size: 15px 10px; /* 화살표 크기 설정 */
`;
