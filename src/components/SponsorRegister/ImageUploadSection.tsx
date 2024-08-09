import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import tw from "twin.macro";
import AddIcon from "../../assets/icons/add-icon";
import DeleteIcon from "../../assets/icons/delete-icon";

const ImageUploadSection = () => {
  const { setValue, getValues } = useFormContext();
  const [images, setImages] = useState<File[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setImages((prevImages) => {
        const newImages = [...prevImages, ...filesArray];
        setValue("images", newImages);
        return newImages;
      });
    }
  };

  const handleImageDelete = (index: number) => {
    setImages((prevImages) => {
      const updatedImages = prevImages.filter((_, i) => i !== index);
      setValue("images", updatedImages);
      return updatedImages;
    });
  };
  return (
    <Container>
      <div className="flex flex-row items-center w-full mt-24">
        <label>이미지 첨부</label>
        <span className="desc">이미지는 최대 4장 첨부할 수 있어요.</span>
      </div>
      {images.length === 0 && (
        <UploadButtonWrapper>
          <label htmlFor="image-upload">이미지 업로드하기</label>
          <input
            type="file"
            id="image-upload"
            style={{ display: "none" }}
            accept="image/*"
            multiple
            onChange={handleImageUpload}
          />
        </UploadButtonWrapper>
      )}
      <ImageContainer>
        {images.map((image, index) => (
          <ImageWrapper key={index}>
            <img
              src={URL.createObjectURL(image)}
              alt={`Uploaded ${index}`}
              className="uploaded-image"
            />
            <DeleteIconWrapper onClick={() => handleImageDelete(index)}>
              <DeleteIcon />
            </DeleteIconWrapper>
          </ImageWrapper>
        ))}
        {/* 이미지 업로드 영역 */}{" "}
        {images.length > 0 && images.length < 4 && (
          <AddButton as="label" htmlFor="image-upload">
            <AddIcon width={65} height={65} />
            <label>이미지 추가 업로드</label>
            <input
              type="file"
              id="image-upload"
              style={{ display: "none" }}
              accept="image/*"
              multiple
              onChange={handleImageUpload}
            />
          </AddButton>
        )}
      </ImageContainer>
    </Container>
  );
};

export default ImageUploadSection;
const Container = styled.div`
  label {
    ${tw`font-medium text-medium-20 text-fontColor3 my-3.5`}
  }
  .desc {
    ${tw`font-medium text-medium-15 text-fontColor2 ml-2.5 mt-1`}
  }
  .background {
    ${tw`
            bg-white p-[0px 21px] rounded-full h-[46px]
            flex gap-[12px] items-center
        `}
  }
`;

const UploadButtonWrapper = styled.div`
  ${tw`flex items-center justify-center w-[182px] h-[46px] bg-mainColor  rounded-full`}
  label {
    ${tw`text-bold-20 font-bold text-background font-sans`}
  }
`;

const ImageContainer = styled.div`
  ${tw`flex flex-row items-center w-full h-[415px]`}
`;
const ImageWrapper = styled.div`
  ${tw`relative mr-6`}
  .uploaded-image {
    ${tw`w-[301px] h-[405px] rounded-[16px] object-cover`}
  }
`;

const DeleteIconWrapper = styled.div`
  ${tw`absolute top-1/2 left-[133px] cursor-pointer z-10`}
`;
const AddButton = styled.div`
  ${tw`flex flex-col items-center justify-center w-[301px] h-[405px] [border-radius: 16px] bg-white`}

  label {
    ${tw`font-sans font-medium text-medium-20 text-mainColor`}
  }
`;
