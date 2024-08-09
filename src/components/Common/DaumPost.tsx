import DaumPostcodeEmbed from "react-daum-postcode";
import styled from "styled-components";
import tw from "twin.macro";

const DaumPost = (props: any) => {
    const complete = (data: any) => {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname;
            }
            if (data.buildingName !== "") {
                extraAddress +=
                    extraAddress !== ""
                        ? `, ${data.buildingName}`
                        : data.buildingName;
            }
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }

        props.setAddress({
            ...props,
            address: fullAddress,
            zonecode: data.zonecode,
            detailAddress: "",
        });

        props.handlePopup();
    };

    return (
        <>
            <Container>
                <DaumPostcodeEmbed onComplete={complete} {...props} />
            </Container>
        </>
    );
};

export default DaumPost;

const Container = styled.div`
    ${tw`
        absolute  z-50 top-0 left-0 right-0 bottom-0
    `}
`;
