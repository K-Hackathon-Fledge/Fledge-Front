import SearchBar from "../components/Challenge/SearchBar";
import DefaultLayout from "../components/Common/DefaultLayout";
import PageHeader from "../components/Common/PageHeader";
import challenge from "../assets/images/challenge_banner.png";
import BestChallenger from "../components/Challenge/BestChallenger";
import ChainChallenge from "../components/Challenge/ChainChallenge";
import ChallengeList from "../components/Challenge/ChallengeList";

import hot from "../assets/images/challenge_hot.png";
import newImg from "../assets/images/challenge_new.png";
import CategoryChallenge from "../components/Challenge/CategoryChallenge";

const Challenge = () => {
    return (
        <DefaultLayout>
            {/* 검색 */}
            <SearchBar />

            {/* 챌린지 페이지 헤더 */}
            <PageHeader
                title="챌린지"
                desc="스스로 자립능력을 키워나갈 수 있는 기회! 지금 바로 도전하고, 성장하는 자신을 만나보세요!"
                imgSrc={challenge}
            />

            {/* 베스트 챌린저 */}
            <BestChallenger />

            {/* HOT한 챌린지 */}
            <ChallengeList
                title="인기 있는 챌린지"
                desc="지금 가장 HOT한 챌린지들을 만나보세요!"
                imgSrc={hot}
                type="popular"
            />

            {/* 연계 챌린지 */}
            <ChainChallenge />

            {/* 신규 챌린지 */}
            <ChallengeList
                title="신규 챌린지"
                desc="새로 갱신된 흥미로운 챌린지들을 만나보세요!"
                imgSrc={newImg}
                type="new"
            />

            {/* 카테고리별 모아보기 */}
            <CategoryChallenge />
        </DefaultLayout>
    );
};

export default Challenge;
