import styled from "styled-components";
import DropDown from "../../Common/DropDown";
import tw from "twin.macro";

interface BirthDateProps {
    year: string;
    month: string;
    day: string;
    onChange: (key: string, value: string) => void;
}

const BirthDate = ({ year, month, day, onChange }: BirthDateProps) => (
    <Container>
        <DropDown
            hint="생년월일"
            type="year"
            value={year + "년"}
            onChange={(e) => onChange("year", e.target.value)}
        />
        <DropDown
            type="month"
            value={month + "월"}
            onChange={(e) => onChange("month", e.target.value)}
            width="110px"
        />
        <DropDown
            type="day"
            value={day + "일"}
            onChange={(e) => onChange("day", e.target.value)}
            width="110px"
        />
    </Container>
);

export default BirthDate;

const Container = styled.div`
    ${tw`
        flex items-center justify-center gap-[10px]
    `}
`;
