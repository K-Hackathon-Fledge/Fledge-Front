import React from "react";

import PageHeader from "../components/Common/PageHeader";
import Mentoring from "../assets/images/mentoring.png";
import MentorApply from "../components/Mentor/MentorApply";
import QuestionMarquee from "../components/Mentor/QuestionMarquee";
import DefaultLayout from "../components/Common/DefaultLayout";
function Mentor() {
  return (
    <DefaultLayout>
      <PageHeader
        title="멘토링"
        desc="누구나 멘토가 되어 청년들의 궁금증을 해결해줄 수 있어요! 멘토와의 익명 채팅을 통해 편하게 궁금증을 해결해요."
        imgSrc={Mentoring}
      />
      <QuestionMarquee />
      <MentorApply />
    </DefaultLayout>
  );
}

export default Mentor;
