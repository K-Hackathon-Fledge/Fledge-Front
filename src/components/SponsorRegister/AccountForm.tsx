import React from "react";
import Dropdown from "./Dropdown";
import Button from "../Common/Button";
import { banks } from "../../@types/sponsor-category";
import styled from "styled-components";
import tw from "twin.macro";
interface AccountProps {
  bankValue: string;
  accountValue: string;
  onBankChange: (value: string) => void;
  onAccountChange: (value: string) => void;
}
function AccountForm({
  bankValue,
  accountValue,
  onBankChange,
  onAccountChange,
}: AccountProps) {
  return (
    <Container>
      <Dropdown
        options={banks}
        value={bankValue}
        onChange={(e) => onBankChange(e.target.value)}
      />
      <input
        type="text"
        value={accountValue}
        onChange={(e) => onAccountChange(e.target.value)}
      />
      <Button mainColor small title="계좌 인증" />
    </Container>
  );
}

export default AccountForm;
const Container = styled.div`
  ${tw`flex flex-row items-center w-[610px] justify-between mt-6`}
  label {
    ${tw`font-medium text-medium-20 text-fontColor3 my-3.5`}
  }
  .desc {
    ${tw`font-medium text-medium-15 text-fontColor2 ml-2.5 mt-1`}
  }

  input {
    ${tw`bg-white h-11 rounded-full font-medium text-medium-20 text-fontColor1 p-3`}
    &:focus {
      ${tw`outline-mainColor`};
    }
  }
`;
