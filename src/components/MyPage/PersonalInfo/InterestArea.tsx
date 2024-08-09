import styled from "styled-components";
import tw from "twin.macro";
import DropDown from "../../Common/DropDown";
import Button from "../../Common/Button";
import Location from "../Location";

interface InterestAreaProps {
    area: { sido: string; sigungu: string; dong: string };
    interestArea: string | null;
    onAreaChange: (key: string, value: string) => void;
    onSave: () => void;
    onDeleteInterestArea: () => void;
}

const InterestArea = ({
    area,
    interestArea,
    onAreaChange,
    onSave,
    onDeleteInterestArea,
}: InterestAreaProps) => (
    <FourthContainer>
        <div className="header">
            <span className="sub-text">관심 지역</span>
            <span className="desc-text">
                최대 10개의 지역을 고를 수 있어요.
            </span>
        </div>
        <div className="selection">
            <div className="selection-item">
                <DropDown
                    items={["시/도", "경기", "인천"]}
                    value={area.sido}
                    onChange={(e) => onAreaChange("sido", e.target.value)}
                    width="110px"
                />
                <DropDown
                    items={["시/군/구", "강동구"]}
                    value={area.sigungu}
                    onChange={(e) => onAreaChange("sigungu", e.target.value)}
                />
                <DropDown
                    items={["행정구/시", "청담동"]}
                    value={area.dong}
                    onChange={(e) => onAreaChange("dong", e.target.value)}
                />
                <Button title="저장" mainColor onClick={onSave} />
            </div>
            <div className="selected-list">
                {interestArea && (
                    <Location
                        text={interestArea}
                        onClick={onDeleteInterestArea}
                    />
                )}
            </div>
        </div>
    </FourthContainer>
);

export default InterestArea;

const FourthContainer = styled.div`
    .header {
        ${tw`
            flex gap-[13px] items-baseline  mb-[24px]
        `}
        .sub-text {
            ${tw`
            text-medium-20 font-medium text-fontColor3 mb-[0px]
        `}
        }
    }
    .selection {
        ${tw` 
            flex flex-col items-start gap-[17px] mt-[-50px] mb-[273px]
        `}
        .selection-item {
            ${tw`
                flex gap-[6.5px] items-center
            `}
            button {
                ${tw`
               ml-[22px]
            `}
            }
        }
        .selected-list {
            ${tw`
                flex gap-[12px]
            `}
        }
        .selected-item {
            ${tw`
                h-[46px] flex gap-[10px] px-[21px]
                border-[3px] border-mainColor rounded-full
                justify-center items-center 
            `}
            span {
                ${tw`
                text-medium-20 font-medium text-mainColor mt-[-2px]
            `}
            }
        }
    }
`;
