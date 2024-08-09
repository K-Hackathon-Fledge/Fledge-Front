import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "../Common/Button";
import { useFormContext } from "react-hook-form";
import PostalCode from "../MyPage/PostalCode";

import { getAddress } from "../../apis/sponsor";
import useAuthStore from "../../storage/useAuthStore";

interface postCode {
  address: string;
  zonecode: number | string;
  detailAddress?: string;
}
function AddressSection() {
  const { register, setValue } = useFormContext();
  const accesstoken = useAuthStore((state) => state.accessToken);
  const [addressData, setAddressData] = useState({
    address: "",
    detailAddress: "",
    zonecode: "",
  });
  const getAddressData = async () => {
    const res = await getAddress(accesstoken!);
    if (res && res.success) {
      const { address, detailAddress, zip, name, phone } = res.data;
      setValue("address", address);
      setValue("detailAddress", detailAddress);
      setValue("zip", zip);
      setValue("recipientName", name);
      setValue("phone", phone);
      setAddressData({ address, detailAddress, zonecode: zip });
    }
  };

  const handleAddressChange = (data: postCode) => {
    setValue("address", data.address);
    setValue("detailAddress", data.detailAddress);
    setValue("zip", data.zonecode);
  };
  return (
    <>
      <Title>배송지 입력</Title>
      <div className="w-[212px] my-9">
        <Button
          title="마이페이지 정보 가져오기"
          mainColor
          small
          onClick={getAddressData}
        />
      </div>
      {/* 우편번호검색 */}
      <PostalCode initialAddress={addressData} onChange={handleAddressChange} />

      <AddressFormContainer className="w-[650px]">
        <InputBox className="w-[300px]">
          <label>*수령자</label>
          <input
            type="text"
            className="background"
            {...register("recipientName")}
          />
        </InputBox>
        <InputBox>
          <label>*연락처</label>
          <input type="text" className="background" {...register("phone")} />
        </InputBox>
      </AddressFormContainer>
    </>
  );
}

export default AddressSection;

const Title = styled.span`
  ${tw`font-bold text-bold-36 text-fontColor1 my-8`}
`;

const AddressFormContainer = styled.div`
  ${tw`flex flex-row items-end justify-between `}
`;

const InputBox = styled.div`
  ${tw`flex flex-col mr-5 my-1.5`}
  label {
    ${tw`font-medium text-medium-20 text-fontColor3 my-3.5`}
  }
  .background {
    ${tw`
            bg-white p-[0px 21px] rounded-full h-[46px]
            flex gap-[12px] items-center
        `}
  }
  input {
    ${tw`bg-white h-11 rounded-full font-medium text-medium-20 text-fontColor1 p-3 w-full`}
    &:focus {
      ${tw`outline-mainColor`};
    }
  }
`;
