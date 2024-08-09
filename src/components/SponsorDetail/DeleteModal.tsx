import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { deleteSupportPost } from "../../apis/sponsor";
import useAuthStore from "../../storage/useAuthStore";
import { useNavigate, useParams } from "react-router-dom";
function DeleteModal({ onClose }: { onClose: () => void }) {
  const { supportId } = useParams() as { supportId: string };
  const accessToken = useAuthStore((state) => state.accessToken!);

  const [isFinished, setIsFinished] = useState(false);

  const navigate = useNavigate();
  const handleDelete = async () => {
    const res = await deleteSupportPost(supportId, accessToken);

    if (res.success) {
      setIsFinished(true);
    }
  };
  return (
    <Overlay onClick={onClose}>
      {!isFinished ? (
        <Wrapper onClick={(e) => e.stopPropagation()}>
          <span className="bold-36">정말로 게시물을 삭제할까요?</span>
          <span className="medium-20">
            게시물을 삭제하면 그동안 모인 후원금도 받을 수 없게 됩니다.
          </span>
          <ButtonWrapper className="w-[247px]">
            <Button onClick={onClose}>뒤로가기</Button>
            <Button delete onClick={handleDelete}>
              삭제하기
            </Button>
          </ButtonWrapper>
        </Wrapper>
      ) : (
        <Wrapper>
          <span className="bold-36">게시물 삭제가 완료되었습니다. </span>
          <ButtonWrapper>
            <Button onClick={() => navigate("/sponsor")}>닫기</Button>
          </ButtonWrapper>
        </Wrapper>
      )}
    </Overlay>
  );
}

export default DeleteModal;

const Overlay = styled.div`
  ${tw`
        w-full h-full bg-[black] bg-opacity-50 
        fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]
        flex justify-center items-center
        z-[2]
    `}
`;
const Wrapper = styled.div`
  ${tw`w-[636px] h-[294px] [border-radius: 16px] bg-background flex flex-col m-auto items-center justify-center font-sans`}

  .bold-36 {
    ${tw`font-bold text-bold-36 text-fontColor1`}
  }
  .medium-20 {
    ${tw`font-medium text-medium-20 text-fontColor3 mt-4`}
  }
`;
const ButtonWrapper = styled.div`
  ${tw`flex flex-row justify-between mt-7`}
`;

const Button = styled.button<{ delete?: boolean }>`
  ${tw` px-4 py-2 rounded-full font-bold text-bold-20`}
  ${({ delete: isDelete }) =>
    isDelete
      ? tw`bg-subColor text-white`
      : tw`text-subColor border-2 border-subColor`}
`;
