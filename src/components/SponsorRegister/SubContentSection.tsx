import React, { useEffect, useState } from "react";
import DateSelector from "./DateSelector";
import styled from "styled-components";
import tw from "twin.macro";
import { useFormContext } from "react-hook-form";
import { ways } from "../../@types/sponsor-category";
function SubContentSection() {
  const { watch, register, setValue } = useFormContext();

  //현재날짜와 후원 마감 날짜와의 차이를 계산하기 위한 state
  const [daysDifference, setDaysDifference] = useState(0);
  const selectedWay = watch("promise");

  // watch를 사용하여 endDate 필드의 변경을 감지
  const endDate = watch("endDate");

  useEffect(() => {
    if (endDate) {
      const selectedDate = new Date(endDate);
      const today = new Date();

      // 시간 부분을 제거하여 순수한 날짜만 비교하도록 설정
      selectedDate.setHours(0, 0, 0, 0);
      today.setHours(0, 0, 0, 0);

      const difference = Math.ceil(
        (selectedDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24) + 1
      );
      setDaysDifference(difference);
    }
  }, [endDate]);

  return (
    <Container>
      {/* 후원기간/내용*/}
      <label>*후원 기간</label>
      <div className="flex flex-row items-center w-full my-4">
        <DateSelector />
        <span className="content">까지</span>
        <PeriodWrapper>
          <span>{daysDifference}일</span>
        </PeriodWrapper>
        <span className="content">동안 후원 게시물을 게시해요</span>
      </div>
      <label>*세부 내용</label>
      <textarea {...register("reason", { required: true })} />
      {/* 후원인증방식 선택 */}
      <div className="flex flex-row items-center w-full mt-9">
        <label>*후원자와의 약속</label>
        <span className="desc">
          후원 인증 약속을 통해 후원자에게 신뢰를 줄 수 있어요.
        </span>
      </div>
      <div className="flex flex-row items-center w-full mb-20">
        {ways.map((way, index) => (
          <WayBtn
            type="button"
            key={index}
            active={way.id === selectedWay}
            onClick={() => setValue("promise", way.id)}
          >
            {way.label}
          </WayBtn>
        ))}
      </div>
    </Container>
  );
}

export default SubContentSection;
const Container = styled.div`
  ${tw`w-[1280px]`}

  label {
    ${tw`font-medium text-medium-20 text-fontColor3 my-3.5`}
  }

  .desc {
    ${tw`font-medium text-medium-15 text-fontColor2 ml-2.5 mt-1`}
  }
  .content {
    ${tw`font-medium font-sans text-medium-20 text-fontColor1`}
  }
  textarea {
    ${tw`w-full bg-white p-[10px 21px] [border-radius: 25px]  h-[225px]
            flex gap-[12px] items-center font-medium text-medium-20 mt-2
       `}
    &:focus {
      ${tw`outline-mainColor`};
    }
  }
`;

const PeriodWrapper = styled.div`
  ${tw`flex items-center justify-center bg-white w-[72px] h-[45px] rounded-full ml-5 `}

  span {
    ${tw`font-sans font-medium text-medium-20 text-subColor`}
  }
`;

const WayBtn = styled.button<{ active: boolean }>`
  ${tw`flex items-center h-[46px] px-[19px] rounded-full font-bold font-sans text-bold-20 mr-3`}

  ${({ active }) =>
    active
      ? tw`bg-mainColor text-background `
      : tw`border-2 border-b-mainColor text-mainColor`}
`;
