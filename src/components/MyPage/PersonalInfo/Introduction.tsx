import styled from "styled-components";
import tw from "twin.macro";

interface IntroductionProps {
    introduction: string;
    onChange: (introduction: string) => void;
}

const Introduction = ({ introduction, onChange }: IntroductionProps) => (
    <Container>
        <div className="sub-text">소개글</div>
        <Textarea
            value={introduction}
            onChange={(e) => onChange(e.target.value)}
        />
    </Container>
);

export default Introduction;

const Container = styled.div`
    ${tw`
        flex flex-col gap-[23px]
    `}

    .sub-text {
        ${tw`
            text-fontColor3 text-medium-20 font-medium
        `}
    }
`;

const Textarea = styled.textarea`
    ${tw`
        w-[1280px] h-[225px] rounded-[25px] resize-none truncate outline-none px-[19px] py-[15px]
        text-medium-20 font-medium text-fontColor1
    `}
`;
