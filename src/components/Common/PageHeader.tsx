import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
interface PageHeaderProps {
  title: string;
  desc: string;
  imgSrc: string;
}
function PageHeader({ title, desc, imgSrc }: PageHeaderProps) {
  return (
    <>
      {/* 헤더 */}
      <Header>
        <div className="text-wrapper">
          <span className="title-text">{title}</span>
          <span className="description-text">{desc}</span>
        </div>
        <div className="image-background">
          <img src={imgSrc} alt="헤더이미지" />
        </div>
      </Header>
    </>
  );
}

export default PageHeader;

const Header = styled.div`
  ${tw`flex flex-row mt-20 h-[528px] w-[1280px] m-auto justify-between`}

  .text-wrapper {
    ${tw`flex flex-col w-1/2 mt-36`}
    .title-text {
      ${tw`text-bold-48 font-sans text-fontColor1 font-bold mb-5`}
    }
    .description-text {
      ${tw`text-medium-20 text-fontColor3 font-sans w-[498px] font-medium `}
    }
  }
  .image-background {
    width: 50%;
    height: 528px;
    background: radial-gradient(50% 50% at 50% 50%, #ffd7c0 0%, #faf8f5 100%);
  }
`;
