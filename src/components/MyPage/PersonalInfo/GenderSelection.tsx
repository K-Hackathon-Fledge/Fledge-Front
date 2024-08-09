import DropDown from "../../Common/DropDown";

interface GenderSelectionProps {
    gender: boolean;
    onChange: (gender: boolean) => void;
}

const GenderSelection = ({ gender, onChange }: GenderSelectionProps) => (
    <DropDown
        hint="성별"
        items={["남성", "여성"]}
        value={gender ? "남성" : "여성"}
        onChange={(e) => onChange(e.target.value === "남성")}
    />
);

export default GenderSelection;
