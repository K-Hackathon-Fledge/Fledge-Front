import styled from "styled-components";
import tw from "twin.macro";
import Banner from "../components/Main/Banner";
import TagLine from "../components/Main/TagLine";
import MentoringSection from "../components/Main/MentoringSection";
import DonationSection from "../components/Main/DonationSection";
import ChallengeSection from "../components/Main/ChallengeSection";
import InformationSection from "../components/Main/InformationSection";
import Button from "../components/Common/Button";
import Bird from "../assets/images/bird.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DefaultLayout from "../components/Common/DefaultLayout";
import useAuthStore from "../storage/useAuthStore";
import { getUserInfo } from "../apis/user";

function Main() {
  // redirection 주소로 부터 accessToken을 받아와서 localStorage에 저장
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const query = new URLSearchParams(location.search);
      let accessToken = useAuthStore.getState().accessToken;
      let refreshToken = useAuthStore.getState().refreshToken;
      if (!accessToken || !refreshToken) {
        const token = query.get("accessToken");
        const refresh = query.get("refreshToken");

        if (token) {
          accessToken = token;
          useAuthStore.setState({ accessToken: token });
        }

        if (refresh) {
          refreshToken = refresh;
          useAuthStore.setState({ refreshToken: refresh });
        }
      }

      if (accessToken && useAuthStore.getState().userData.id === undefined) {
        try {
          const res = await getUserInfo(accessToken);
          if (res.success) {
            useAuthStore.setState({
              isLoggedIn: true,
              userData: res.data,
              accessToken: accessToken,
            });
            navigate("/"); // 사용자 정보 설정 후 홈으로 리디렉션
          }
        } catch (error) {
          console.error("사용자 정보 가져오기 오류:", error);
        }
      }
    };

    fetchUserInfo();
  }, [location.search, navigate]);

  return (
    <DefaultLayout>
      <TagLine />
      <Banner />
      <ContentsContainer>
        <DonationSection />
        <ChallengeSection />
        <MentoringSection />
        <InformationSection />
        <FledgeContainer>
          <Title>fledge 플리지에게 흥미가 생기셨나요?</Title>
          <Button title="fledge가 뭐에요?" />
          <img src={Bird} alt="bird" />
        </FledgeContainer>
      </ContentsContainer>
    </DefaultLayout>
  );
}

const FledgeContainer = styled.div`
  ${tw`
        flex
        flex-col
        items-center
        gap-[41px]
        mb-[184px]
    `}
`;

const Title = styled.span`
  ${tw`
        text-bold-64
        font-bold
        text-fontColor1
    `}
`;

const ContentsContainer = styled.div`
  ${tw`
        flex
        flex-col
        items-center

        mt-[142px]
        gap-[288px]
    `}
`;

export default Main;
