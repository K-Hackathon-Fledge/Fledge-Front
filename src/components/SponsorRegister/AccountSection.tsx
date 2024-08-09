import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { useFormContext } from "react-hook-form";
import AccountForm from "./AccountForm";

function AccountSection() {
  const { setValue, watch } = useFormContext();
  return (
    <>
      <Title>계좌번호 입력</Title>
      <Container>
        <div className="flex flex-row items-center w-full">
          <label>송금 계좌</label>
          <span className="desc">
            후원금 충족 시 송금 받을 계좌를 알려주세요.
          </span>
        </div>
        <AccountForm
          bankValue={watch("bank")}
          accountValue={watch("account")}
          onBankChange={(value) => setValue("bank", value)}
          onAccountChange={(value) => setValue("account", value)}
        />
      </Container>
    </>
  );
}

export default AccountSection;
const Title = styled.span`
  ${tw`font-bold text-bold-36 text-fontColor1 my-8`}
`;

const Container = styled.div`
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
