import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { SponsorDetailData } from "../../@types/sponsor";
type ContentDetailProps = {
  data: SponsorDetailData;
};

const ContentDetail: React.FC<ContentDetailProps> = ({ data }) => {
  return (
    <Container>
      <RowBox className="justify-between items-center">
        <span className="d-day">D-{data.leftDays}</span>
        <ColBox className="justify-end">
          <label className="medium-20">후원기간</label>
          <span className="medium-20">{data.expirationDate}</span>
        </ColBox>
      </RowBox>
      <RowBox>
        <span className="title">{data.title}</span>
      </RowBox>

      {data.images && data.images.length > 0 ? (
        <ImageContainer>
          {data.images.map((image, index) => (
            <img src={image} key={index} alt={`image-${index}`} />
          ))}
        </ImageContainer>
      ) : (
        <div className="my-10"></div>
      )}

      <RowBox>
        <ColBox className="w-1/2">
          <RowBox className="my-2">
            <label className="medium-20">필요 물품</label>
            <span className="content">{data.item}</span>
          </RowBox>
          <RowBox className="my-2">
            <label className="medium-20">구매 링크</label>
            <span className="content">{data.purchaseUrl}</span>
          </RowBox>
          <RowBox className="my-2">
            <label className="medium-20">물품 금액</label>
            <span className="content">{data.price}</span>
          </RowBox>
        </ColBox>
        <RowBox>
          <label className="medium-20">세부 내용</label>
          <span className="content">{data.reason}</span>
        </RowBox>
      </RowBox>
    </Container>
  );
};

export default ContentDetail;

const Container = styled.div`
  ${tw`w-full font-sans mt-24`}

  .d-day {
    ${tw`font-bold text-bold-64 text-subColor`}
  }
  .medium-20 {
    ${tw`font-medium text-fontColor3 text-medium-20`}
  }
  .title {
    ${tw`font-bold text-bold-48 text-fontColor1`}
  }
  .content {
    ${tw`ml-7 font-bold text-bold-20 text-fontColor1`}
  }
`;

const RowBox = styled.div`
  ${tw`flex flex-row`}
`;

const ColBox = styled.div`
  ${tw`flex flex-col justify-between`}
`;

const ImageContainer = styled.div`
  ${tw`flex flex-row items-center w-full h-[415px] my-10`}

  img {
    ${tw`w-[301px] h-[415px] [border-radius: 16px] mr-5`}
  }
`;
