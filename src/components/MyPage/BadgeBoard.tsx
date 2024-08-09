import styled from "styled-components";
import tw from "twin.macro";

import Badge1 from "../../assets/images/badges/badge_knowledge_1.png";
import Badge2 from "../../assets/images/badges/badge_employment_1.png";
import Badge3 from "../../assets/images/badges/badge_health_1.png";
import Badge4 from "../../assets/images/badges/badge_finance_1.png";
import Badge5 from "../../assets/images/badges/badge_mindcontrol_1.png";

import LeftArrowIcon from "../../assets/icons/left-arrow";
import RightArrowIcon from "../../assets/icons/right-arrow";

import board from "../../assets/images/board.png";
import Badge from "./Badge";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { useEffect, useRef, useState } from "react";

const Badges = [
    {
        category: ["자기계발", "지식"],
        title: "한 달에 한 권 독서하기",
        date: "2024년 01월 01일 달성",
        image: Badge1,
    },
    {
        category: ["취엄"],
        title: "취업박람회 방문하기",
        date: "2024년 01월 01일 달성",
        image: Badge2,
    },
    {
        category: ["건강"],
        title: "매일 아침 러닝",
        date: "2024년 01월 01일 달성",
        image: Badge3,
    },
    {
        category: ["재정관리", "금융"],
        title: "예적금 들기",
        date: "2024년 01월 01일 달성",
        image: Badge4,
    },
    {
        category: ["마인드컨트롤"],
        title: "멘토링 받기",
        date: "2024년 01월 01일 달성",
        image: Badge5,
    },
    {
        category: ["자기계발", "지식"],
        title: "한 달에 한 권 독서하기",
        date: "2024년 01월 01일 달성",
        image: Badge1,
    },
    {
        category: ["취엄"],
        title: "취업박람회 방문하기",
        date: "2024년 01월 01일 달성",
        image: Badge2,
    },
    {
        category: ["건강"],
        title: "매일 아침 러닝",
        date: "2024년 01월 01일 달성",
        image: Badge3,
    },
    {
        category: ["재정관리", "금융"],
        title: "예적금 들기",
        date: "2024년 01월 01일 달성",
        image: Badge4,
    },
    {
        category: ["마인드컨트롤"],
        title: "멘토링 받기",
        date: "2024년 01월 01일 달성",
        image: Badge5,
    },
    {
        category: ["자기계발", "지식"],
        title: "한 달에 한 권 독서하기",
        date: "2024년 01월 01일 달성",
        image: Badge1,
    },
    {
        category: ["취엄"],
        title: "취업박람회 방문하기",
        date: "2024년 01월 01일 달성",
        image: Badge2,
    },
    {
        category: ["건강"],
        title: "매일 아침 러닝",
        date: "2024년 01월 01일 달성",
        image: Badge3,
    },
    {
        category: ["재정관리", "금융"],
        title: "예적금 들기",
        date: "2024년 01월 01일 달성",
        image: Badge4,
    },
];

const BadgeBoard = () => {
    // 슬라이드 버튼 참조
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
        null
    );

    useEffect(() => {
        if (swiperInstance) {
            swiperInstance.navigation?.init();
            swiperInstance.navigation?.update();
        }
    }, [swiperInstance]);

    return (
        <Container>
            <Header>
                <span className="title">챌린지 달성 뱃지</span>
                <span className="desc">
                    00개의 챌린지를 성공적으로 마쳤어요. 성장하고 계시는군요!
                </span>
            </Header>
            <Body>
                <img className="backboard" src={board} alt="badge-board" />
                <BadgeSlide>
                    <button ref={prevRef}>
                        <LeftArrowIcon width={24} height={51} color="white" />
                    </button>
                    <StyledSwiper
                        slidesPerView={5}
                        modules={[Navigation]}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onSwiper={setSwiperInstance}
                    >
                        <div className="badges">
                            {Badges.map((badge, index) => (
                                <SwiperSlide key={index}>
                                    <Badge
                                        category={badge.category}
                                        title={badge.title}
                                        date={badge.date}
                                        image={badge.image}
                                        index={index}
                                    />
                                </SwiperSlide>
                            ))}
                        </div>
                    </StyledSwiper>
                    <button ref={nextRef}>
                        <RightArrowIcon width={24} height={51} color="white" />
                    </button>
                </BadgeSlide>
            </Body>
        </Container>
    );
};

export default BadgeBoard;

const BadgeSlide = styled.div`
    ${tw`
        flex items-center gap-[50px]
    `}
    button {
        z-index: 1;
    }
`;

const Body = styled.div`
    ${tw`
            relative w-[1728px] h-[702.55px] flex justify-center items-center
        `}
    .backboard {
        ${tw`
                absolute z-[-1]
            `}
    }
    .badges {
        ${tw`
               w-[1280px] flex justify-between
            `}
    }
`;

const Container = styled.div`
    ${tw`
            mt-[72px] mb-[287px] w-full flex flex-col gap-[49px] items-center
    `}
`;

const Header = styled.div`
    ${tw`
            flex flex-col items-start gap-[3px] w-[1280px]
        `}
    .title {
        ${tw`
                text-bold-36 font-bold text-fontColor1
        `}
    }
    .desc {
        ${tw`
                text-medium-20 font-medium text-fontColor3
        `}
    }
`;

const StyledSwiper = styled(Swiper)`
    ${tw`
        w-[1280px]
    `}
`;
