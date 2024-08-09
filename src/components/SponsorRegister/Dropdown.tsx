import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

type DropdownProps = {
  options: Array<{ id: string | number; label: string | number }>;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange }) => {
  return (
    <SelectWrapper>
      <Select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </Select>
    </SelectWrapper>
  );
};

export default Dropdown;

const SelectWrapper = styled.div`
  ${tw`flex items-center h-11 rounded-full bg-white px-4`}
`;

const Select = styled.select`
  ${tw`text-center text-fontColor1 font-sans text-medium-20 font-medium bg-white`}
  outline: none; /* 포커스 시 outline 제거 */
  appearance: none; /* 기본 화살표 제거 */
  padding-right: 20px;

  background: url('data:image/svg+xml;utf8,<svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L7.5 7.5L14 1.5" stroke="%23EF7F18" stroke-width="2" stroke-linecap="round"/></svg>')
    no-repeat right center;
  background-size: 15px 10px; /* 화살표 크기 설정 */
`;
